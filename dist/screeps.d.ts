/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */
declare const enum SuccessCode {
    OK = 0,
}
declare const enum ErrorCode {
    NOT_OWNER = -1,
    NO_PATH = -2,
    NAME_EXISTS = -3,
    BUSY = -4,
    NOT_FOUND = -5,
    NOT_ENOUGH_RESOURCES = -6,
    NOT_ENOUGH_ENERGY = -6,
    INVALID_TARGET = -7,
    FULL = -8,
    NOT_IN_RANGE = -9,
    INVALID_ARGS = -10,
    TIRED = -11,
    NO_BODYPART = -12,
    NOT_ENOUGH_EXTENSIONS = -6,
    RCL_NOT_ENOUGH = -14,
    GCL_NOT_ENOUGH = -15,
}
declare type ResultCode = SuccessCode | ErrorCode;
declare const enum FindQuery {
    EXIT_TOP = 1,
    EXIT_RIGHT = 3,
    EXIT_BOTTOM = 5,
    EXIT_LEFT = 7,
    EXIT = 10,
    CREEPS = 101,
    MY_CREEPS = 102,
    HOSTILE_CREEPS = 103,
    SOURCES_ACTIVE = 104,
    SOURCES = 105,
    DROPPED_RESOURCES = 106,
    DROPPED_ENERGY = 106,
    STRUCTURES = 107,
    MY_STRUCTURES = 108,
    HOSTILE_STRUCTURES = 109,
    FLAGS = 110,
    CONSTRUCTION_SITES = 111,
    MY_SPAWNS = 112,
    HOSTILE_SPAWNS = 113,
    MY_CONSTRUCTION_SITES = 114,
    HOSTILE_CONSTRUCTION_SITES = 115,
    MINERALS = 116,
    NUKES = 117,
}
declare const enum Direction {
    TOP = 1,
    TOP_RIGHT = 2,
    RIGHT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM = 5,
    BOTTOM_LEFT = 6,
    LEFT = 7,
    TOP_LEFT = 8,
}
declare const enum ColorCode {
    RED = 1,
    PURPLE = 2,
    BLUE = 3,
    CYAN = 4,
    GREEN = 5,
    YELLOW = 6,
    ORANGE = 7,
    BROWN = 8,
    GREY = 9,
    WHITE = 10,
}
declare const COLORS_ALL: number[];
declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 500;
declare const CREEP_CORPSE_RATE: 0.2;
declare const OBSTACLE_OBJECT_TYPES: string[];
declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;
declare const REPAIR_COST: 0.01;
declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    2: 300000;
    3: 1000000;
    4: 3000000;
    5: 10000000;
    6: 30000000;
    7: 100000000;
    8: 300000000;
};
declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;
declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;
declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;
declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: {
    0: 50;
    1: 50;
    2: 50;
    3: 50;
    4: 50;
    5: 50;
    6: 50;
    7: 100;
    8: 200;
};
declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;
declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;
declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;
declare const BODYPART_COST: {
    [part: string]: number;
    move: 50;
    work: 100;
    attack: 80;
    carry: 50;
    heal: 250;
    ranged_attack: 150;
    tough: 10;
    claim: 600;
};
declare const BODYPARTS_ALL: string[];
declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const DISMANTLE_COST: 0.005;
declare const enum BodyPartType {
    MOVE = "move",
    WORK = "work",
    CARRY = "carry",
    ATTACK = "attack",
    RANGED_ATTACK = "ranged_attack",
    TOUGH = "tough",
    HEAL = "heal",
    CLAIM = "claim",
}
declare const CONSTRUCTION_COST: {
    spawn: 15000;
    extension: 3000;
    road: 300;
    constructedWall: 1;
    rampart: 1;
    link: 5000;
    storage: 30000;
    tower: 5000;
    observer: 8000;
    powerSpawn: 100000;
    extractor: 5000;
    lab: 50000;
    terminal: 100000;
    container: 5000;
    nuker: 100000;
};
declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;
declare const enum StructureType {
    EXTENSION = "extension",
    RAMPART = "rampart",
    ROAD = "road",
    SPAWN = "spawn",
    LINK = "link",
    WALL = "wall",
    KEEPER_LAIR = "keeperLair",
    CONTROLLER = "controller",
    STORAGE = "storage",
    TOWER = "tower",
    OBSERVER = "observer",
    POWER_BANK = "powerBank",
    POWER_SPAWN = "powerSpawn",
    EXTRACTOR = "extractor",
    LAB = "lab",
    TERMINAL = "terminal",
    CONTAINER = "container",
    NUKER = "nuker",
    PORTAL = "portal",
}
declare const enum ResourceType {
    ENERGY = "energy",
    POWER = "power",
    UTRIUM = "U",
    LEMERGIUM = "L",
    KEANIUM = "K",
    GHODIUM = "G",
    ZYNTHIUM = "Z",
    OXYGEN = "O",
    HYDROGEN = "H",
    CATALYST = "X",
    HYDROXIDE = "OH",
    ZYNTHIUM_KEANITE = "ZK",
    UTRIUM_LEMERGITE = "UL",
    UTRIUM_HYDRIDE = "UH",
    UTRIUM_OXIDE = "UO",
    KEANIUM_HYDRIDE = "KH",
    KEANIUM_OXIDE = "KO",
    LEMERGIUM_HYDRIDE = "LH",
    LEMERGIUM_OXIDE = "LO",
    ZYNTHIUM_HYDRIDE = "ZH",
    ZYNTHIUM_OXIDE = "ZO",
    GHODIUM_HYDRIDE = "GH",
    GHODIUM_OXIDE = "GO",
    UTRIUM_ACID = "UH2O",
    UTRIUM_ALKALIDE = "UHO2",
    KEANIUM_ACID = "KH2O",
    KEANIUM_ALKALIDE = "KHO2",
    LEMERGIUM_ACID = "LH2O",
    LEMERGIUM_ALKALIDE = "LHO2",
    ZYNTHIUM_ACID = "ZH2O",
    ZYNTHIUM_ALKALIDE = "ZHO2",
    GHODIUM_ACID = "GH2O",
    GHODIUM_ALKALIDE = "GHO2",
    CATALYZED_UTRIUM_ACID = "XUH2O",
    CATALYZED_UTRIUM_ALKALIDE = "XUHO2",
    CATALYZED_KEANIUM_ACID = "XKH2O",
    CATALYZED_KEANIUM_ALKALIDE = "XKHO2",
    CATALYZED_LEMERGIUM_ACID = "XLH2O",
    CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2",
    CATALYZED_ZYNTHIUM_ACID = "XZH2O",
    CATALYZED_ZYNTHIUM_ALKALIDE = "ZXHO2",
    CATALYZED_GHODIUM_ACID = "XGH2O",
    CATALYZED_GHODIUM_ALKALIDE = "XGHO2",
}
declare const RESOURCES_ALL: string[];
declare const SUBSCRIPTION_TOKEN: string;
declare const CONTROLLER_LEVELS: {
    [level: number]: number;
};
declare const CONTROLLER_STRUCTURES: {
    [structure: string]: {
        [level: number]: number;
    };
};
declare const CONTROLLER_DOWNGRADE: {
    [level: number]: number;
};
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare const TOWER_HITS: number;
declare const TOWER_CAPACITY: number;
declare const TOWER_ENERGY_COST: number;
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_FALLOFF: number;
declare const OBSERVER_HITS: number;
declare const OBSERVER_RANGE: number;
declare const POWER_BANK_HITS: number;
declare const POWER_BANK_CAPACITY_MAX: number;
declare const POWER_BANK_CAPACITY_MIN: number;
declare const POWER_BANK_CAPACITY_CRIT: number;
declare const POWER_BANK_DECAY: number;
declare const POWER_BANK_HIT_BACK: number;
declare const POWER_SPAWN_HITS: number;
declare const POWER_SPAWN_ENERGY_CAPACITY: number;
declare const POWER_SPAWN_POWER_CAPACITY: number;
declare const POWER_SPAWN_ENERGY_RATIO: number;
declare const EXTRACTOR_HITS: number;
declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;
declare const LAB_REACTION_AMOUNT: number;
declare const GCL_POW: number;
declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;
declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;
declare const MODE_ARENA: string;
declare const TERRAIN_MASK_WALL: number;
declare const TERRAIN_MASK_SWAMP: number;
declare const TERRAIN_MASK_LAVA: number;
declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;
declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: {
    H: number;
    O: number;
    L: number;
    K: number;
    Z: number;
    U: number;
    X: number;
};
declare const MINERAL_RANDOM_FACTOR: number;
declare const MINERAL_DENSITY: {
    1: number;
    2: number;
    3: number;
    4: number;
};
declare const MINERAL_DENSITY_PROBABILITY: {
    1: number;
    2: number;
    3: number;
    4: number;
};
declare const MINERAL_DENSITY_CHANGE: number;
declare const DENSITY_LOW: number;
declare const DENSITY_MODERATE: number;
declare const DENSITY_HIGH: number;
declare const DENSITY_ULTRA: number;
declare const TERMINAL_CAPACITY: number;
declare const TERMINAL_HITS: number;
declare const TERMINAL_SEND_COST: number;
declare const TERMINAL_MIN_SEND: number;
declare const TERMINAL_COOLDOWN: number;
declare const CONTAINER_HITS: number;
declare const CONTAINER_CAPACITY: number;
declare const CONTAINER_DECAY: number;
declare const CONTAINER_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;
declare const NUKER_HITS: number;
declare const NUKER_COOLDOWN: number;
declare const NUKER_ENERGY_CAPACITY: number;
declare const NUKER_GHODIUM_CAPACITY: number;
declare const NUKE_LAND_TIME: number;
declare const NUKE_RANGE: number;
declare const NUKE_DAMAGE: {
    0: number;
    1: number;
    4: number;
};
declare const REACTIONS: {
    [reagent: string]: {
        [reagent: string]: string;
    };
};
declare const BOOSTS: {
    [part: string]: {
        [boost: string]: {
            [action: string]: number;
        };
    };
};
declare const enum LookQuery {
    CREEPS = "creep",
    ENERGY = "energy",
    RESOURCES = "resource",
    SOURCES = "source",
    MINERALS = "mineral",
    STRUCTURES = "structure",
    FLAGS = "flag",
    CONSTRUCTION_SITES = "constructionSite",
    NUKES = "nuke",
    TERRAIN = "terrain",
}
declare const enum OrderType {
    SELL = "sell",
    BUY = "buy",
}
/**
 * A site of a structure which is currently under construction.
 */
interface ConstructionSite extends RoomObject {
    readonly prototype: ConstructionSite;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info
     */
    owner: Owner;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    structureType: StructureType;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): ResultCode;
}
interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {
}
declare const ConstructionSite: ConstructionSiteConstructor;
declare var Memory: Memory;
declare var RawMemory: RawMemory;
declare var Game: Game;
declare var PathFinder: PathFinder;
declare type Controller = StructureController;
declare type Extension = StructureExtension;
declare type KeeperLair = StructureKeeperLair;
declare type Lab = StructureLab;
declare type Link = StructureLink;
declare type Observer = StructureObserver;
declare type PowerBank = StructurePowerBank;
declare type PowerSpawn = StructurePowerSpawn;
declare type Rampart = StructureRampart;
declare type Terminal = StructureTerminal;
declare type Container = StructureContainer;
declare type Tower = StructureTower;
declare type Spawn = StructureSpawn;
declare const Spawn: StructureSpawnConstructor;
interface Storage extends StructureStorage {
}
/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of up to 50 body parts with the following possible types:
 */
interface Creep extends RoomObject, HitPoints {
    readonly prototype: Creep;
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     * type: string
     * body part constant
     * hits: number
     * The remaining amount of hit points of this body part.
     */
    body: BodyPartDefinition[];
    /**
     * An object with the creep's cargo contents:
     * energy: number
     * The current amount of energy the creep is carrying.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     */
    carryCapacity: number;
    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     */
    fatigue: number;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
     */
    memory: any;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.creeps object.
     */
    name: string;
    /**
     * An object with the creep’s owner info
     */
    owner: Owner;
    /**
     * The link to the Room object. Always defined because creeps give visibility into the room they're in.
     */
    room: Room;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The remaining amount of game ticks after which the creep will die.
     */
    ticksToLive: number;
    /**
     * Attack another creep or structure in a short-ranged attack. Needs the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attack(target: Creep | Structure): ResultCode;
    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the creep.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attackController(target: Controller): ResultCode;
    /**
     * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
     */
    build(target: ConstructionSite): ResultCode;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns Result Code: OK, ERR_NOT_FOUND
     */
    cancelOrder(methodName: string): ResultCode;
    /**
     * Requires the CLAIM body part. If applied to a neutral controller, claims it under your control. If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count. The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
     */
    claimController(target: Controller): ResultCode;
    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to the creep.
     * @param target The target structure.
     */
    dismantle(target: Structure): ResultCode;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: ResourceType, amount?: number): ResultCode;
    /**
     * Add one more available safe mode activation to a room controller. The creep has to be at adjacent square to the target room controller and have 1000 ghodium resource.
     * @param target The target room controller.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    generateSafeMode(target: Controller): ResultCode;
    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     */
    getActiveBodyparts(type: BodyPartType): ResultCode;
    /**
     * Harvest energy from the source. Needs the WORK body part. If the creep has an empty CARRY body part, the harvested energy is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     */
    harvest(target: Source | Mineral): ResultCode;
    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     */
    heal(target: Creep): ResultCode;
    /**
     * Move the creep one square in the specified direction. Needs the MOVE body part.
     * @param direction
     */
    move(direction: Direction): ResultCode;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | PathFinderPath | string): ResultCode;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts): ResultCode;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(target: TargetPosition, opts?: MoveToOpts): ResultCode;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ResultCode;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): ResultCode;
    /**
     * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     */
    rangedAttack(target: Creep | Structure): ResultCode;
    /**
     * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     */
    rangedHeal(target: Creep): ResultCode;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range. Needs the RANGED_ATTACK body part. The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack(): ResultCode;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target he target structure to be repaired.
     */
    repair(target: Structure): ResultCode;
    /**
     * Temporarily block a neutral controller from claiming by other players. Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    reserveController(target: Controller): ResultCode;
    /**
     * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): ResultCode;
    /**
     * Sign a controller with a random text visible to all players. This text will appear in the room UI, in the world map, and can be accessed via the API.
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. Pass an empty string to remove the sign.
     * @param target The target controller object to be signed.
     * @param text The sign text. The maximum text length is 100 characters.
     * @returns Result Code: OK, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    signController(target: Controller, text: string): ResultCode;
    /**
     * Kill the creep immediately.
     */
    suicide(): ResultCode;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: Creep | Structure, resourceType: ResourceType, amount?: number): ResultCode;
    /**
     * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel. Needs WORK and CARRY body parts. The target has to be at adjacent square to the creep. A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power. The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * @param target The target controller object to be upgraded.
     */
    upgradeController(target: Controller): ResultCode;
    /**
     * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same structure in the same tick. Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     * @param target The target object.
     * @param resourceType The target One of the RESOURCE_* constants..
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    withdraw(target: Structure, resourceType: ResourceType, amount?: number): ResultCode;
}
interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {
}
declare const Creep: CreepConstructor;
declare const OK: SuccessCode.OK;
declare const ERR_NOT_OWNER: ErrorCode.NOT_OWNER;
declare const ERR_NO_PATH: ErrorCode.NO_PATH;
declare const ERR_NAME_EXISTS: ErrorCode.NAME_EXISTS;
declare const ERR_BUSY: ErrorCode.BUSY;
declare const ERR_NOT_FOUND: ErrorCode.NOT_FOUND;
declare const ERR_NOT_ENOUGH_RESOURCES: ErrorCode.NOT_ENOUGH_RESOURCES;
declare const ERR_NOT_ENOUGH_ENERGY: ErrorCode.NOT_ENOUGH_ENERGY;
declare const ERR_INVALID_TARGET: ErrorCode.INVALID_TARGET;
declare const ERR_FULL: ErrorCode.FULL;
declare const ERR_NOT_IN_RANGE: ErrorCode.NOT_IN_RANGE;
declare const ERR_INVALID_ARGS: ErrorCode.INVALID_ARGS;
declare const ERR_TIRED: ErrorCode.TIRED;
declare const ERR_NO_BODYPART: ErrorCode.NO_BODYPART;
declare const ERR_NOT_ENOUGH_EXTENSIONS: ErrorCode.NOT_ENOUGH_EXTENSIONS;
declare const ERR_RCL_NOT_ENOUGH: ErrorCode.RCL_NOT_ENOUGH;
declare const ERR_GCL_NOT_ENOUGH: ErrorCode.GCL_NOT_ENOUGH;
declare const FIND_EXIT_TOP: FindQuery.EXIT_TOP;
declare const FIND_EXIT_RIGHT: FindQuery.EXIT_RIGHT;
declare const FIND_EXIT_BOTTOM: FindQuery.EXIT_BOTTOM;
declare const FIND_EXIT_LEFT: FindQuery.EXIT_LEFT;
declare const FIND_EXIT: FindQuery.EXIT;
declare const FIND_CREEPS: FindQuery.CREEPS;
declare const FIND_MY_CREEPS: FindQuery.MY_CREEPS;
declare const FIND_HOSTILE_CREEPS: FindQuery.HOSTILE_CREEPS;
declare const FIND_SOURCES_ACTIVE: FindQuery.SOURCES_ACTIVE;
declare const FIND_SOURCES: FindQuery.SOURCES;
declare const FIND_DROPPED_RESOURCES: FindQuery.DROPPED_RESOURCES;
declare const FIND_DROPPED_ENERGY: FindQuery.DROPPED_ENERGY;
declare const FIND_STRUCTURES: FindQuery.STRUCTURES;
declare const FIND_MY_STRUCTURES: FindQuery.MY_STRUCTURES;
declare const FIND_HOSTILE_STRUCTURES: FindQuery.HOSTILE_STRUCTURES;
declare const FIND_FLAGS: FindQuery.FLAGS;
declare const FIND_CONSTRUCTION_SITES: FindQuery.CONSTRUCTION_SITES;
declare const FIND_MY_SPAWNS: FindQuery.MY_SPAWNS;
declare const FIND_HOSTILE_SPAWNS: FindQuery.HOSTILE_SPAWNS;
declare const FIND_MY_CONSTRUCTION_SITES: FindQuery.MY_CONSTRUCTION_SITES;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: FindQuery.HOSTILE_CONSTRUCTION_SITES;
declare const FIND_MINERALS: FindQuery.MINERALS;
declare const FIND_NUKES: FindQuery.NUKES;
declare const TOP: Direction.TOP;
declare const TOP_RIGHT: Direction.TOP_RIGHT;
declare const RIGHT: Direction.RIGHT;
declare const BOTTOM_RIGHT: Direction.BOTTOM_RIGHT;
declare const BOTTOM: Direction.BOTTOM;
declare const BOTTOM_LEFT: Direction.BOTTOM_LEFT;
declare const LEFT: Direction.LEFT;
declare const TOP_LEFT: Direction.TOP_LEFT;
declare const COLOR_RED: ColorCode.RED;
declare const COLOR_PURPLE: ColorCode.PURPLE;
declare const COLOR_BLUE: ColorCode.BLUE;
declare const COLOR_CYAN: ColorCode.CYAN;
declare const COLOR_GREEN: ColorCode.GREEN;
declare const COLOR_YELLOW: ColorCode.YELLOW;
declare const COLOR_ORANGE: ColorCode.ORANGE;
declare const COLOR_BROWN: ColorCode.BROWN;
declare const COLOR_GREY: ColorCode.GREY;
declare const COLOR_WHITE: ColorCode.WHITE;
declare const MOVE: BodyPartType.MOVE;
declare const WORK: BodyPartType.WORK;
declare const CARRY: BodyPartType.CARRY;
declare const ATTACK: BodyPartType.ATTACK;
declare const RANGED_ATTACK: BodyPartType.RANGED_ATTACK;
declare const TOUGH: BodyPartType.TOUGH;
declare const HEAL: BodyPartType.HEAL;
declare const CLAIM: BodyPartType.CLAIM;
declare const STRUCTURE_EXTENSION: StructureType.EXTENSION;
declare const STRUCTURE_RAMPART: StructureType.RAMPART;
declare const STRUCTURE_ROAD: StructureType.ROAD;
declare const STRUCTURE_SPAWN: StructureType.SPAWN;
declare const STRUCTURE_LINK: StructureType.LINK;
declare const STRUCTURE_WALL: StructureType.WALL;
declare const STRUCTURE_KEEPER_LAIR: StructureType.KEEPER_LAIR;
declare const STRUCTURE_CONTROLLER: StructureType.CONTROLLER;
declare const STRUCTURE_STORAGE: StructureType.STORAGE;
declare const STRUCTURE_TOWER: StructureType.TOWER;
declare const STRUCTURE_OBSERVER: StructureType.OBSERVER;
declare const STRUCTURE_POWER_BANK: StructureType.POWER_BANK;
declare const STRUCTURE_POWER_SPAWN: StructureType.POWER_SPAWN;
declare const STRUCTURE_EXTRACTOR: StructureType.EXTRACTOR;
declare const STRUCTURE_LAB: StructureType.LAB;
declare const STRUCTURE_TERMINAL: StructureType.TERMINAL;
declare const STRUCTURE_CONTAINER: StructureType.CONTAINER;
declare const STRUCTURE_NUKER: StructureType.NUKER;
declare const STRUCTURE_PORTAL: StructureType.PORTAL;
declare const RESOURCE_ENERGY: ResourceType.ENERGY;
declare const RESOURCE_POWER: ResourceType.POWER;
declare const RESOURCE_UTRIUM: ResourceType.UTRIUM;
declare const RESOURCE_LEMERGIUM: ResourceType.LEMERGIUM;
declare const RESOURCE_KEANIUM: ResourceType.KEANIUM;
declare const RESOURCE_GHODIUM: ResourceType.GHODIUM;
declare const RESOURCE_ZYNTHIUM: ResourceType.ZYNTHIUM;
declare const RESOURCE_OXYGEN: ResourceType.OXYGEN;
declare const RESOURCE_HYDROGEN: ResourceType.HYDROGEN;
declare const RESOURCE_CATALYST: ResourceType.CATALYST;
declare const RESOURCE_HYDROXIDE: ResourceType.HYDROXIDE;
declare const RESOURCE_ZYNTHIUM_KEANITE: ResourceType.ZYNTHIUM_KEANITE;
declare const RESOURCE_UTRIUM_LEMERGITE: ResourceType.UTRIUM_LEMERGITE;
declare const RESOURCE_UTRIUM_HYDRIDE: ResourceType.UTRIUM_HYDRIDE;
declare const RESOURCE_UTRIUM_OXIDE: ResourceType.UTRIUM_OXIDE;
declare const RESOURCE_KEANIUM_HYDRIDE: ResourceType.KEANIUM_HYDRIDE;
declare const RESOURCE_KEANIUM_OXIDE: ResourceType.KEANIUM_OXIDE;
declare const RESOURCE_LEMERGIUM_HYDRIDE: ResourceType.LEMERGIUM_HYDRIDE;
declare const RESOURCE_LEMERGIUM_OXIDE: ResourceType.LEMERGIUM_OXIDE;
declare const RESOURCE_ZYNTHIUM_HYDRIDE: ResourceType.ZYNTHIUM_HYDRIDE;
declare const RESOURCE_ZYNTHIUM_OXIDE: ResourceType.ZYNTHIUM_OXIDE;
declare const RESOURCE_GHODIUM_HYDRIDE: ResourceType.GHODIUM_HYDRIDE;
declare const RESOURCE_GHODIUM_OXIDE: ResourceType.GHODIUM_OXIDE;
declare const RESOURCE_UTRIUM_ACID: ResourceType.UTRIUM_ACID;
declare const RESOURCE_UTRIUM_ALKALIDE: ResourceType.UTRIUM_ALKALIDE;
declare const RESOURCE_KEANIUM_ACID: ResourceType.KEANIUM_ACID;
declare const RESOURCE_KEANIUM_ALKALIDE: ResourceType.KEANIUM_ALKALIDE;
declare const RESOURCE_LEMERGIUM_ACID: ResourceType.LEMERGIUM_ACID;
declare const RESOURCE_LEMERGIUM_ALKALIDE: ResourceType.LEMERGIUM_ALKALIDE;
declare const RESOURCE_ZYNTHIUM_ACID: ResourceType.ZYNTHIUM_ACID;
declare const RESOURCE_ZYNTHIUM_ALKALIDE: ResourceType.ZYNTHIUM_ALKALIDE;
declare const RESOURCE_GHODIUM_ACID: ResourceType.GHODIUM_ACID;
declare const RESOURCE_GHODIUM_ALKALIDE: ResourceType.GHODIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_UTRIUM_ACID: ResourceType.CATALYZED_UTRIUM_ACID;
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: ResourceType.CATALYZED_UTRIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_KEANIUM_ACID: ResourceType.CATALYZED_KEANIUM_ACID;
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: ResourceType.CATALYZED_KEANIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: ResourceType.CATALYZED_LEMERGIUM_ACID;
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: ResourceType.CATALYZED_LEMERGIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: ResourceType.CATALYZED_ZYNTHIUM_ACID;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: ResourceType.CATALYZED_ZYNTHIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_GHODIUM_ACID: ResourceType.CATALYZED_GHODIUM_ACID;
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: ResourceType.CATALYZED_GHODIUM_ALKALIDE;
declare const LOOK_CREEPS: LookQuery.CREEPS;
declare const LOOK_ENERGY: LookQuery.ENERGY;
declare const LOOK_RESOURCES: LookQuery.RESOURCES;
declare const LOOK_SOURCES: LookQuery.SOURCES;
declare const LOOK_MINERALS: LookQuery.MINERALS;
declare const LOOK_STRUCTURES: LookQuery.STRUCTURES;
declare const LOOK_FLAGS: LookQuery.FLAGS;
declare const LOOK_CONSTRUCTION_SITES: LookQuery.CONSTRUCTION_SITES;
declare const LOOK_NUKES: LookQuery.NUKES;
declare const LOOK_TERRAIN: LookQuery.TERRAIN;
declare const ORDER_SELL: OrderType.SELL;
declare const ORDER_BUY: OrderType.BUY;
/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {
    readonly prototype: Flag;
    /**
     * Flag color. One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     */
    color: ColorCode;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: any;
    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     */
    name: string;
    /**
     * Flag secondary color. One of the COLOR_* constants.
     */
    secondaryColor: ColorCode;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): SuccessCode;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: ColorCode, secondaryColor?: ColorCode): ResultCode;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): ResultCode;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: TargetPosition): ResultCode;
}
interface FlagConstructor extends _Constructor<Flag> {
    new (name: string, color: ColorCode, secondaryColor: ColorCode, roomName: string, x: number, y: number): Flag;
    (name: string, color: ColorCode, secondaryColor: ColorCode, roomName: string, x: number, y: number): Flag;
}
declare const Flag: FlagConstructor;
/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: {
        [creepName: string]: Creep;
    };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: {
        [flagName: string]: Flag;
    };
    /**
     * Your Global Control Level, an object with the following properties :
     */
    gcl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    rooms: {
        [roomName: string]: Room;
    };
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: {
        [spawnName: string]: Spawn;
    };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: {
        [structureId: string]: Structure;
    };
    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: {
        [constructionSiteId: string]: ConstructionSite;
    };
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;
    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string | undefined): T | null;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): void;
}
interface GlobalControlLevel {
    level: number;
    progress: number;
    progressTotal: number;
}
interface CPU {
    limit: number;
    tickLimit: number;
    bucket: number;
    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
}
/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: string;
    /**
     * One of the body part types constants.
     */
    type: BodyPartType;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
interface Owner {
    username: string;
}
interface ReservationDefinition {
    username: string;
    ticksToEnd: number;
}
interface SignDefinition {
    username: string;
    text: string;
    time: number;
    datetime: Date;
}
interface StoreDefinition {
    [resource: string]: number | undefined;
    energy?: number;
    power?: number;
}
interface LookAtResultWithPos {
    x: number;
    y: number;
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    terrain?: string;
    structure?: Structure;
    flag?: Flag;
    energy?: Resource;
    exit?: any;
    source?: Source;
    mineral?: Mineral;
    resource?: Resource;
}
interface LookAtResult {
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    energy?: Resource;
    exit?: any;
    flag?: Flag;
    source?: Source;
    structure?: Structure;
    terrain?: string;
    mineral?: Mineral;
    resource?: Resource;
}
interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix | LookAtResult[];
}
interface FindPathOpts {
    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName. This callback will only be called once per room per search. If you are running multiple pathfinding operations in a single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the CostMatrix documentation below for more information on CostMatrix. If you return false from the callback the requested room will not be searched, and it won't count against maxRooms
     */
    roomCallback?: ((roomName: string) => PathFinder['CostMatrix'] | boolean);
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals. The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms: number;
    maxCost: number;
    /**
     * The maximum allowed cost of the path returned. If at any point the pathfinder detects that it is impossible to find a path with a cost less than or equal to maxCost it will immediately halt the search. The default is Infinity.
     */
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     */
    heuristicWeight: number;
}
interface MoveToOpts extends FindPathOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;
    /**
     * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * Room.serializePath. The default value is true.
     */
    serializeMemory?: boolean;
    /**
     * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;
    /**
     * Draw a line along the creep’s path using RoomVisual.poly. You can provide either an empty object or custom style parameters.
     */
    visualizePathStyle?: PolyStyle;
}
interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: Direction;
}
/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}
interface _Constructor<T> {
    readonly prototype: T;
}
interface _ConstructorById<T> extends _Constructor<T> {
    new (id: string): T;
    (id: string): T;
}
declare type Filter<T> = ((t: T) => boolean) | Partial<T> | string | any;
declare type TargetPosition = RoomPosition | {
    pos: RoomPosition;
};
/**
 * The options that can be accepted by `findRoute()` and friends.
 */
interface RouteOptions {
    routeCallback: {
        (roomName: string, fromRoomName: string): any;
    };
}
/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): {
        "1"?: string;
        "3"?: string;
        "5"?: string;
        "7"?: string;
    };
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @return The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): ResultCode;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): {
        exit: number;
        room: string;
    }[] | ErrorCode;
    /**
     * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
     * sending resources through terminals, or using observers and nukes.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @param continuous Whether to treat the world map continuous on borders. Set to true if you
     *                   want to calculate the trade or terminal send cost. Default is false.
     */
    getRoomLinearDistance(roomName1: string, roomName2: string, continuous?: boolean): number;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    getTerrainAt(x: number, y: number, roomName: string): string;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     */
    getTerrainAt(pos: RoomPosition): string;
    /**
     * Check if the room is available to move into.
     * @param roomName The room name.
     * @returns A boolean value.
     */
    isRoomAvailable(roomName: string): boolean;
}
/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
interface Market {
    /**
     * Your current credits balance.
     */
    credits: number;
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An object with your active and inactive buy/sell orders on the market.
     */
    orders: {
        [key: string]: Order;
    };
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula: Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
     * @param amount Amount of resources to be sent.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @returns The amount of energy required to perform the transaction.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     * @param orderId The order ID as provided in Game.market.orders
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    cancelOrder(orderId: string): ResultCode;
    /**
     * Change the price of an existing order. If newPrice is greater than old price, you will be charged (newPrice-oldPrice)*remainingAmount*0.05 credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param newPrice The new order price.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    changeOrderPrice(orderId: string, newPrice: number): ResultCode;
    /**
     * Create a market order in your terminal. You will be charged price*amount*0.05 credits when the order is placed.
     * The maximum orders count is 20 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     */
    createOrder(type: OrderType, resourceType: ResourceType, price: number, totalAmount: number, roomName?: string): ResultCode;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     */
    deal(orderId: string, amount: number, targetRoomName?: string): ResultCode;
    /**
     * Add more capacity to an existing order. It will affect remainingAmount and totalAmount properties. You will be charged price*addAmount*0.05 credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param addAmount How much capacity to add. Cannot be a negative value.
     * @returns Result Code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    extendOrder(orderId: string, addAmount: number): ResultCode;
    /**
     * Get other players' orders currently active on the market.
     * @param filter (optional) An object or function that will filter the resulting list using the lodash.filter method.
     * @returns An array of objects containing order information.
     */
    getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
    /**
     * Retrieve info for specific market order.
     * @param orderId The order ID
     * @returns An object with the order info. See getAllOrders for properties explanation.
     */
    getOrderById(id: string): Order | null;
}
interface Transaction {
    transactionId: string;
    time: number;
    sender?: {
        username: string;
    };
    recipient?: {
        username: string;
    };
    resourceType: ResourceType;
    amount: number;
    from: string;
    to: string;
    description: string;
}
interface Order {
    id: string;
    created: number;
    active?: boolean;
    type: OrderType;
    resourceType: ResourceType;
    roomName?: string;
    amount: number;
    remainingAmount: number;
    totalAmount?: number;
    price: number;
}
interface OrderFilter {
    id?: string;
    created?: number;
    type?: OrderType;
    resourceType?: ResourceType;
    roomName?: string;
    amount?: number;
    remainingAmount?: number;
    price?: number;
}
interface Memory {
    [name: string]: any;
    creeps: {
        [name: string]: any;
    };
    flags: {
        [name: string]: any;
    };
    rooms: {
        [name: string]: any;
    };
    spawns: {
        [name: string]: any;
    };
}
/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
interface Mineral extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * The density of this mineral deposit, one of the DENSITY_* constants.
     */
    density: number;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: ResourceType;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}
interface MineralConstructor extends _Constructor<Mineral>, _ConstructorById<Mineral> {
}
declare const Mineral: MineralConstructor;
/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
interface Nuke extends RoomObject {
    readonly prototype: Nuke;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}
interface NukeConstructor {
    new (id: string): Nuke;
}
declare const Nuke: NukeConstructor;
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms.
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
interface PathFinder {
    /**
     * Container for custom navigation cost data.
     */
    CostMatrix: CostMatrix;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal goal A RoomPosition or an object containing a RoomPosition and range
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: RoomPosition | {
        pos: RoomPosition;
        range: number;
    }, opts?: PathFinderOpts): PathFinderPath;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal an array of goals, the cheapest path found out of all the goals will be returned.
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: RoomPosition[] | {
        pos: RoomPosition;
        range: number;
    }[], opts?: PathFinderOpts): PathFinderPath;
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     *
     * @param isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use(isEnabled: boolean): void;
}
/**
 * An object containing:
 * path - An array of RoomPosition objects.
 * ops - Total number of operations performed before this path was calculated.
 * cost - The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
 * incomplete - If the pathfinder fails to find a complete path, this will be true.
 *   Note that `path` will still be populated with a partial path which represents the closest path it could find given the search parameters.
 */
interface PathFinderPath {
    path: RoomPosition[];
    ops: number;
    cost: number;
    incomplete: boolean;
}
/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;
    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}
/**
 * Container for custom navigation cost data.
 */
interface CostMatrix {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new (): CostMatrix;
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): void;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): number;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     */
    serialize(): number[];
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     */
    deserialize(val: number[]): CostMatrix;
}
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
    /**
     * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values.
     * Use RawMemory.setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick.
     */
    segments: string[];
    /**
     * An object with a memory segment of another player available on this tick.
     * Use setActiveForeignSegment to fetch segments on the next tick. The object consists of the following properties:
     * @type {ForeignMemorySegment}
     */
    foreignSegment: ForeignMemorySegment;
    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): void;
    /**
     * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
     * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
     */
    setActiveSegments(ids: number[]): void;
    /**
     * Request a memory segment of another user.
     * The segment should be marked by its owner as public using setPublicSegments.
     * The segment data will become available on the next tick in foreignSegment object.
     * You can only have access to one foreign segment at the same time.
     * @param {(string | null)} username The name of another user. Pass null to clear the foreign segment.
     * @param {number} [id] The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by setDefaultPublicSegment.
     */
    setActiveForeignSegment(username: string | null, id?: number): void;
    /**
     * Set the specified segment as your default public segment.
     * It will be returned if no id parameter is passed to setActiveForeignSegment by another user.
     * @param {(number | null)} id The ID of the memory segment from 0 to 99. Pass null to remove your default public segment.
     */
    setDefaultPublicSegment(id: number | null): void;
    /**
     * Set specified segments as public. Other users will be able to request access to them using setActiveForeignSegment.
     * @param {number[]} ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of setPublicSegments override previous ones.
     */
    setPublicSegments(ids: number[]): void;
}
interface ForeignMemorySegment {
    username: string;
    id: number;
    data: string;
}
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
interface Resource extends RoomObject {
    readonly prototype: Resource;
    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: ResourceType;
}
interface ResourceConstructor {
    new (id: string): Resource;
}
declare const Resource: ResourceConstructor;
/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */
interface RoomObject {
    readonly prototype: RoomObject;
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}
interface RoomObjectConstructor extends _Constructor<RoomObject> {
    new (x: number, y: number, roomName: string): RoomObject;
    (x: number, y: number, roomName: string): RoomObject;
}
declare const RoomObject: RoomObjectConstructor;
/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {
    readonly prototype: RoomPosition;
    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    createConstructionSite(structureType: ResourceType): ResultCode;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: ColorCode, secondaryColor?: ColorCode): ResultCode;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type See Room.find
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(type: FindQuery, opts?: FindPathOpts & {
        filter?: Filter<T>;
        algorithm?: string;
    }): T;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(objects: T[] | RoomPosition[], opts?: FindPathOpts & {
        filter?: Filter<T>;
        algorithm?: string;
    }): T;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param type See Room.find.
     * @param opts
     */
    findClosestByRange<T>(type: FindQuery, opts?: {
        filter: Filter<T>;
    }): T;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing one of the following options: filter
     */
    findClosestByRange<T>(objects: T[] | RoomPosition[], opts?: {
        filter: Filter<T>;
    }): T;
    /**
     * Find all objects in the specified linear range.
     * @param type See Room.find.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(type: FindQuery, range: number, opts?: {
        filter?: Filter<T>;
    }): T[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(objects: T[] | RoomPosition[], range: number, opts?: {
        filter?: Filter<T>;
    }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(target: TargetPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getDirectionTo(x: number, y: number): Direction;
    /**
     * Get linear direction to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getDirectionTo(target: TargetPosition): Direction;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getRangeTo(x: number, y: number): number;
    /**
     * Get linear range to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getRangeTo(target: TargetPosition): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param toPos The target position.
     * @param range The range distance.
     */
    inRangeTo(target: TargetPosition, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isEqualTo(x: number, y: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isEqualTo(target: TargetPosition): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isNearTo(x: number, y: number): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isNearTo(target: TargetPosition): boolean;
    /**
     * Get the list of objects at the specified room position.
     */
    look(): LookAtResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     */
    lookFor<T>(type: LookQuery): T[];
}
interface RoomPositionConstructor extends _Constructor<RoomPosition> {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    new (x: number, y: number, roomName: string): RoomPosition;
    (x: number, y: number, roomName: string): RoomPosition;
}
declare const RoomPosition: RoomPositionConstructor;
declare class RoomVisual {
    /** The name of the room. */
    roomName: string;
    /**
     * You can directly create new RoomVisual object in any room, even if it's invisible to your script.
     * @param roomName The room name.
     */
    constructor(roomName: string);
    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;
    /**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyle): RoomVisual;
    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;
    /**
     * Draw a circle.
     * @param pos The position object of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(pos: RoomPosition, style?: CircleStyle): RoomVisual;
    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(x: number, y: number, width: number, height: number, style?: PolyStyle): RoomVisual;
    /**
     * Draw a rectangle.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(topLeftPos: RoomPosition, width: number, height: number, style?: PolyStyle): RoomVisual;
    /**
     * Draw a polygon.
     * @param points An array of point coordinate arrays, i.e. [[0,0], [5,5], [5,10]].
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    poly(points: [number, number][], style?: PolyStyle): RoomVisual;
    /**
     * Draw a text label.
     * @param text The text message.
     * @param pos The position object of the label baseline.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;
    /**
     * Draw a text label.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, pos: RoomPosition, style?: TextStyle): RoomVisual;
    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object, for chaining.
     */
    clear(): RoomVisual;
    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;
}
interface LineStyle {
    width?: number;
    color?: string;
    opacity?: number;
    lineStyle?: "dashed" | "dotted";
}
interface PolyStyle {
    fill?: string;
    opacity?: number;
    stroke?: string | undefined;
    strokeWidth?: number;
    lineStyle?: "dashed" | "dotted";
}
interface CircleStyle extends PolyStyle {
    radius?: number;
}
interface TextStyle {
    color?: string;
    size?: number;
    align?: "center" | "left" | "right";
    opacity?: number;
}
/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
interface Room {
    readonly prototype: Room;
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller: Controller | undefined;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
     */
    memory: any;
    /**
     * One of the following constants:
     * MODE_SIMULATION, MODE_SURVIVAL, MODE_WORLD, MODE_ARENA
     */
    mode: string;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage: StructureStorage | undefined;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal: Terminal | undefined;
    /**
     * The RoomVisual object for this room.
     */
    visual: RoomVisual;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: StructureType): ResultCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: TargetPosition, structureType: StructureType): ResultCode;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: ColorCode, secondaryColor?: ColorCode): ResultCode;
    /**
     * Create new Flag at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(pos: TargetPosition, name?: string, color?: ColorCode, secondaryColor?: ColorCode): ResultCode;
    /**
     * Find all objects of the specified type in the room.
     * @param type One of the following constants:FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_SOURCES, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_DROPPED_ENERGY, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_FLAGS, FIND_CONSTRUCTION_SITES, FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT, FIND_EXIT
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find<T>(type: FindQuery, opts?: {
        filter: Filter<T>;
    }): T[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): ResultCode;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: TargetPosition): LookAtResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: LookQuery, x: number, y: number): T[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: LookQuery, target: TargetPosition): T[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: LookQuery, top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
}
interface RoomConstructor {
    new (id: string): Room;
    serializePath(path: PathStep[]): string;
    deserializePath(path: string): PathStep[];
}
declare const Room: RoomConstructor;
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject, EnergyContainer {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    readonly prototype: Source;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * If you can get an instance of Source, you can see it.
     * If you can see a Source, you can see the room it's in.
     */
    room: Room;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}
interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {
}
declare const Source: SourceConstructor;
/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 */
interface StructureSpawn extends OwnedStructure, EnergyContainer {
    readonly prototype: StructureSpawn;
    /**
     * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
     */
    memory: any;
    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the spawn via the Game.spawns object.
     */
    name: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     * @param name The name of a new creep.
     * @param needTime Time needed in total to complete the spawning.
     * @param remainingTime Remaining time to go.
     */
    spawning: {
        name: string;
        needTime: number;
        remainingTime: number;
    };
    /**
     * Check if a creep can be created.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     */
    canCreateCreep(body: BodyPartType[], name?: string): ResultCode;
    /**
     * Start the creep spawning process.
     * The name of a new creep or one of these error codes
     * ERR_NOT_OWNER	-1	You are not the owner of this spawn.
     * ERR_NAME_EXISTS	-3	There is a creep with the same name already.
     * ERR_BUSY	-4	The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY	-6	The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS	-10	Body is not properly described.
     * ERR_RCL_NOT_ENOUGH	-14	Your Room Controller level is not enough to use this spawn.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    createCreep(body: BodyPartType[], name?: string, memory?: any): ErrorCode | string;
    /**
     * Destroy this spawn immediately.
     */
    destroy(): ResultCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the spawn is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ResultCode;
    /**
     * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size). Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * @param target The target creep object.
     */
    renewCreep(target: Creep): ResultCode;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param target The target creep object.
     */
    recycleCreep(target: Creep): ResultCode;
    /**
     * @deprecated
     * Transfer the energy from the spawn to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): ResultCode;
}
interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
}
declare const StructureSpawn: StructureSpawnConstructor;
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
