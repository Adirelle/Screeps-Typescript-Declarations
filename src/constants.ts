/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

declare const enum SuccessCode {
    OK = 0
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
    GCL_NOT_ENOUGH = -15
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
    DROPPED_ENERGY = 106, // Yup, it's 106
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
    NUKES = 117
}

declare const enum Direction {
    TOP = 1,
    TOP_RIGHT = 2,
    RIGHT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM = 5,
    BOTTOM_LEFT = 6,
    LEFT = 7,
    TOP_LEFT = 8
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
    WHITE = 10
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
    2: 300000,
    3: 1000000,
    4: 3000000,
    5: 10000000,
    6: 30000000,
    7: 100000000,
    8: 300000000
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
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 100,
    8: 200
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
    CLAIM = "claim"
}

declare const CONSTRUCTION_COST: {
    spawn: 15000,
    extension: 3000,
    road: 300,
    constructedWall: 1,
    rampart: 1,
    link: 5000,
    storage: 30000,
    tower: 5000,
    observer: 8000,
    powerSpawn: 100000,
    extractor: 5000,
    lab: 50000,
    terminal: 100000,
    container: 5000,
    nuker: 100000
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
    PORTAL = "portal"
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
    CATALYZED_GHODIUM_ALKALIDE = "XGHO2"
}
declare const RESOURCES_ALL: string[];

declare const SUBSCRIPTION_TOKEN: string;

declare const CONTROLLER_LEVELS: {[level: number]: number};
declare const CONTROLLER_STRUCTURES: {[structure: string]: {[level: number]: number}};
declare const CONTROLLER_DOWNGRADE: {[level: number]: number};
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
    H: number,
    O: number,
    L: number,
    K: number,
    Z: number,
    U: number,
    X: number
}
declare const MINERAL_RANDOM_FACTOR: number;


declare const MINERAL_DENSITY: {
        1: number,
        2: number,
        3: number,
        4: number
}
declare const MINERAL_DENSITY_PROBABILITY: {
        1: number,
        2: number,
        3: number,
        4: number
}
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
    0: number,
    1: number,
    4: number
}

declare const REACTIONS: {
    [reagent: string]: {
        [reagent: string]: string
    }
}

declare const BOOSTS: {
    [part: string]: {
        [boost: string]: {
            [action: string]: number
        }
    }
}

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
    TERRAIN = "terrain"
}

declare const enum OrderType {
    SELL = "sell",
    BUY = "buy"
}
