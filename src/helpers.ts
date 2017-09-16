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
    username: string,
    ticksToEnd: number
}
interface SignDefinition {
    username: string;
    text: string;
    time: number,
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
    resource? : Resource;
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
    [coord: number]: LookAtResultMatrix|LookAtResult[]
}

interface FindPathOpts {
    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName. This callback will only be called once per room per search. If you are running multiple pathfinding operations in a single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the CostMatrix documentation below for more information on CostMatrix. If you return false from the callback the requested room will not be searched, and it won't count against maxRooms
     */
    roomCallback?: ((roomName: string) => PathFinder['CostMatrix']|boolean);

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
};

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

type Filter<T> = ((t: T) => boolean) | Partial<T> | string | any;

type TargetPosition = RoomPosition | { pos: RoomPosition };
