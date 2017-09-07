/**
 * Common object aspects
 */

interface HitPoints {
    /**
     * The current amount of hit points.
     */
    hits: number;
    /**
     * The maximum amount of hit points.
     */
    hitsMax: number;
}

interface EnergyContainer {
    /**
     * The current amount of contained energy.
     */
    energy: number;
    /**
     * The maximum amount of contained energy.
     */
    energyCapacity: number;
}

interface Decaying {
    /**
     * The amount of game ticks before disappearing.
     */
    ticksToDecay: number;
}

interface StorageHolder {
    /**
     * The storage contents.
     */
    store: StoreDefinition;
    /**
     * The maximum amount of resources.
     */
    storeCapacity: number;
}

interface HasCooldown {
    /**
     * The minimum amount of game ticks between two consecutive uses.
     */
    cooldown: number;
}

interface Transferer {
    /**
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transfer(target: Creep, resourceType: ResourceType, amount?: number): ResultCode;
}

interface EnergyTransferer {
    /**
     * @deprecated
     * Transfer the energy to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): ResultCode;
}

/**
 * Parent object for structure classes
 */

interface Structure extends RoomObject, HitPoints {
    readonly prototype: Structure;

    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * If you can get an instance of a Structure, you can see it.
     * If you can see the Structure, you can see the room it's in.
     */
    room: Room;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: StructureType;
    /**
     * Destroy this structure immediately.
     */
    destroy(): ResultCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ResultCode;
}

interface StructureConstructor extends _Constructor<Structure>, _ConstructorById<Structure> {
}

declare const Structure: StructureConstructor;

/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
interface OwnedStructure extends Structure {
    readonly prototype: OwnedStructure;

    /**
     * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
    /**
     * The link to the Room object. Is always present because owned structures give visibility.
     */
    room: Room;

}

interface OwnedStructureConstructor extends _Constructor<OwnedStructure>, _ConstructorById<OwnedStructure> {
}

declare const OwnedStructure: OwnedStructureConstructor;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure {
    readonly prototype: StructureController;

    /**
     * Current controller level, from 0 to 8.
     */
    level: number;
    /**
     * The current progress of upgrading the controller to the next level.
     */
    progress: number;
    /**
     * The progress needed to reach the next level.
     */
    progressTotal: number;
    /**
     * An object with the controller reservation info if present: username, ticksToEnd
     */
    reservation: ReservationDefinition;
    /**
     * How many ticks of safe mode are remaining, or undefined.
     */
    safeMode: number | undefined;
    /**
     * Safe mode activations available to use.
     */
    safeModeAvailable: number;
    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     */
    safeModeCooldown: number | undefined;
    /**
     * An object with the controller sign info if present
     */
    sign: SignDefinition;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     */
    upgradeBlocked: number;
    /**
     * Activate safe mode if available.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED
     */
    activateSafeMode(): ResultCode;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): ResultCode;
}

interface StructureControllerConstructor extends _Constructor<StructureController>, _ConstructorById<StructureController> {
}

declare const StructureController: StructureControllerConstructor;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
interface StructureExtension extends OwnedStructure, EnergyContainer, EnergyTransferer {
    readonly prototype: StructureExtension;
}

interface StructureExtensionConstructor extends _Constructor<StructureExtension>, _ConstructorById<StructureExtension> {
}

declare const StructureExtension: StructureExtensionConstructor;

/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure, EnergyContainer, EnergyTransferer, HasCooldown {
    readonly prototype: StructureLink;
}

interface StructureLinkConstructor extends _Constructor<StructureLink>, _ConstructorById<StructureLink> {
}

declare const StructureLink: StructureLinkConstructor;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources
 * and minerals in some rooms. This structure cannot be destroyed.
 */
interface StructureKeeperLair extends OwnedStructure {
    readonly prototype: StructureKeeperLair;

    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn: number | undefined;
}

interface StructureKeeperLairConstructor extends _Constructor<StructureKeeperLair>, _ConstructorById<StructureKeeperLair> {
}

declare const StructureKeeperLair: StructureKeeperLairConstructor;

/**
 * Provides visibility into a distant room from your script.
 */
interface StructureObserver extends OwnedStructure {
    readonly prototype: StructureObserver;

    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick. The maximum range is 5 rooms.
     * @param roomName
     */
    observeRoom(roomName: string): ResultCode;
}

interface StructureObserverConstructor extends _Constructor<StructureObserver>, _ConstructorById<StructureObserver> {
}

declare const StructureObserver: StructureObserverConstructor;

/**
 *
 */
interface StructurePowerBank extends OwnedStructure, Decaying {
    readonly prototype: StructurePowerBank;

    /**
     * The amount of power containing.
     */
    power: number;
}

interface StructurePowerBankConstructor extends _Constructor<StructurePowerBank>, _ConstructorById<StructurePowerBank> {
}

declare const StructurePowerBank: StructurePowerBankConstructor;

/**
 * Non-player structure. Contains power resource which can be obtained by
 * destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerSpawn extends OwnedStructure, EnergyContainer, EnergyTransferer {
    readonly prototype: StructurePowerSpawn;
    /**
     * The amount of power containing in this structure.
     */
    power: number;
    /**
     * The total amount of power this structure can contain.
     */
    powerCapacity: number;

    /**
     * Create a power creep. Currently in development
     * @param name The name of the power creep.
     */
    createPowerCreep(name: string): ResultCode;
    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills. Consumes 1 power resource unit and 50 energy resource units.
     */
    processPower(): ResultCode;
}

interface StructurePowerSpawnConstructor extends _Constructor<StructurePowerSpawn>, _ConstructorById<StructurePowerSpawn> {
}

declare const StructurePowerSpawn: StructurePowerSpawnConstructor;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure, Decaying {
    readonly prototype: StructureRampart;

    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     */
    isPublic: boolean;

    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param isPublic Whether this rampart should be public or non-public
     */
    setPublic(isPublic: boolean): void;
}

interface StructureRampartConstructor extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {
}

declare const StructureRampart: StructureRampartConstructor;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less
 * `MOVE` body parts.
 */
interface StructureRoad extends Structure, Decaying {
    readonly prototype: StructureRoad;
}

interface StructureRoadConstructor extends _Constructor<StructureRoad>, _ConstructorById<StructureRoad> {
}

declare const StructureRoad: StructureRoadConstructor;

/**
 * A structure that can store huge amount of resource units. Only one structure
 * per room is allowed that can be addressed by `Room.storage` property.
 */
interface StructureStorage extends OwnedStructure, StorageHolder, EnergyTransferer, Transferer {
    readonly prototype: StructureStorage;

}

interface StructureStorageConstructor extends _Constructor<StructureStorage>, _ConstructorById<StructureStorage> {
}

declare const StructureStorage: StructureStorageConstructor;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to
 * any object in the room. However, its effectiveness highly depends on the
 * distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure, EnergyContainer, EnergyTransferer {
    readonly prototype: StructureTower;

    /**
     * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target creep.
     */
    attack(target: Creep): ResultCode;
    /**
     * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     * @param target The target creep.
     */
    heal(target: Creep): ResultCode;
    /**
     * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target structure.
     */
    repair(target: Spawn | Structure): ResultCode;

}

interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {
}

declare const StructureTower: StructureTowerConstructor;

/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure {
    readonly prototype: StructureWall;
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     */
    ticksToLive: number;
}

interface StructureWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {
}

declare const StructureWall: StructureWallConstructor;

/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure, HasCooldown {
    readonly prototype: StructureExtractor;
}

interface StructureExtractorConstructor extends _Constructor<StructureExtractor>, _ConstructorById<StructureExtractor> {
}

declare const StructureExtractor: StructureExtractorConstructor;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
interface StructureLab extends OwnedStructure, EnergyContainer, HasCooldown, Transferer {
    readonly prototype: StructureLab;
    /**
     * The amount of mineral resources containing in the lab.
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     */
    mineralType: string;
    /**
     * The total amount of minerals the lab can contain.
     */
    mineralCapacity: number;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): ResultCode;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): ResultCode;
}

interface StructureLabConstructor extends _Constructor<StructureLab>, _ConstructorById<StructureLab> {
}

declare const StructureLab: StructureLabConstructor;

/**
 * Sends any resources to a Terminal in another room.
 */
interface StructureTerminal extends OwnedStructure, StorageHolder, HasCooldown, Transferer {
    readonly prototype: StructureTerminal;

    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: ResourceType, amount: number, destination: string, description?: string): ResultCode;
}

interface StructureTerminalConstructor extends _Constructor<StructureTerminal>, _ConstructorById<StructureTerminal> {
}

declare const StructureTerminal: StructureTerminalConstructor;

/**
 * Contains up to 2,000 resource units. Can be constructed in neutral rooms. Decays for 5,000 hits per 100 ticks.
 */
interface StructureContainer extends Structure, Decaying, StorageHolder, Transferer {
    readonly prototype: StructureContainer;
}

interface StructureContainerConstructor extends _Constructor<StructureContainer>, _ConstructorById<StructureContainer> {
}

declare const StructureContainer: StructureContainerConstructor;

/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources. Launching
 * creates a Nuke object at the target room position which is visible to any player
 * until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot
 * be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure, EnergyContainer, HasCooldown {
    readonly prototype: StructureNuker;
    /**
     * The amount of ghodium contained in this structure.
     */
    ghodium: number;
    /**
     * The total amount of ghodium this structure can contain.
     */
    ghodiumCapacity: number;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): ResultCode;
}

interface StructureNukerConstructor extends _Constructor<StructureNuker>, _ConstructorById<StructureNuker> {
}

declare const StructureNuker: StructureNukerConstructor;

/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
interface StructurePortal extends Structure {
    readonly prototype: StructurePortal;
    /**
     * The position object in the destination room.
     */
    destination: RoomPosition;
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay?: number;
}

interface StructurePortalConstructor extends _Constructor<StructurePortal>, _ConstructorById<StructurePortal> {
}

declare const StructurePortal: StructurePortalConstructor;