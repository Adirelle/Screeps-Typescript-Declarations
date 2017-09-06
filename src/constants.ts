/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

declare const enum SuccessCode {
    OK = 0
}

declare const enum ErrorCode {
    ERR_NOT_OWNER = -1,
    ERR_NO_PATH = -2,
    ERR_NAME_EXISTS = -3,
    ERR_BUSY = -4,
    ERR_NOT_FOUND = -5,
    ERR_NOT_ENOUGH_RESOURCES = -6,
    ERR_NOT_ENOUGH_ENERGY = -6,
    ERR_INVALID_TARGET = -7,
    ERR_FULL = -8,
    ERR_NOT_IN_RANGE = -9,
    ERR_INVALID_ARGS = -10,
    ERR_TIRED = -11,
    ERR_NO_BODYPART = -12,
    ERR_NOT_ENOUGH_EXTENSIONS = -6,
    ERR_RCL_NOT_ENOUGH = -14,
    ERR_GCL_NOT_ENOUGH = -15
}

declare type ResultCode = SuccessCode | ErrorCode;

declare const enum FindQuery {
    FIND_EXIT_TOP = 1,
    FIND_EXIT_RIGHT = 3,
    FIND_EXIT_BOTTOM = 5,
    FIND_EXIT_LEFT = 7,
    FIND_EXIT = 10,
    FIND_CREEPS = 101,
    FIND_MY_CREEPS = 102,
    FIND_HOSTILE_CREEPS = 103,
    FIND_SOURCES_ACTIVE = 104,
    FIND_SOURCES = 105,
    FIND_DROPPED_RESOURCES = 106,
    FIND_DROPPED_ENERGY = 106, // Yup, it's 106
    FIND_STRUCTURES = 107,
    FIND_MY_STRUCTURES = 108,
    FIND_HOSTILE_STRUCTURES = 109,
    FIND_FLAGS = 110,
    FIND_CONSTRUCTION_SITES = 111,
    FIND_MY_SPAWNS = 112,
    FIND_HOSTILE_SPAWNS = 113,
    FIND_MY_CONSTRUCTION_SITES = 114,
    FIND_HOSTILE_CONSTRUCTION_SITES = 115,
    FIND_MINERALS = 116,
    FIND_NUKES = 117,
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
    COLOR_RED = 1,
    COLOR_PURPLE = 2,
    COLOR_BLUE = 3,
    COLOR_CYAN = 4,
    COLOR_GREEN = 5,
    COLOR_YELLOW = 6,
    COLOR_ORANGE = 7,
    COLOR_BROWN = 8,
    COLOR_GREY = 9,
    COLOR_WHITE = 10
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
    STRUCTURE_EXTENSION = "extension",
    STRUCTURE_RAMPART = "rampart",
    STRUCTURE_ROAD = "road",
    STRUCTURE_SPAWN = "spawn",
    STRUCTURE_LINK = "link",
    STRUCTURE_WALL = "wall",
    STRUCTURE_KEEPER_LAIR = "keeperLair",
    STRUCTURE_CONTROLLER = "controller",
    STRUCTURE_STORAGE = "storage",
    STRUCTURE_TOWER = "tower",
    STRUCTURE_OBSERVER = "observer",
    STRUCTURE_POWER_BANK = "powerBank",
    STRUCTURE_POWER_SPAWN = "powerSpawn",
    STRUCTURE_EXTRACTOR = "extractor",
    STRUCTURE_LAB = "lab",
    STRUCTURE_TERMINAL = "terminal",
    STRUCTURE_CONTAINER = "container",
    STRUCTURE_NUKER = "nuker",
    STRUCTURE_PORTAL = "portal"
}

declare const enum ResourceType {
    RESOURCE_ENERGY = "energy",
    RESOURCE_POWER = "power",
    RESOURCE_UTRIUM = "U",
    RESOURCE_LEMERGIUM = "L",
    RESOURCE_KEANIUM = "K",
    RESOURCE_GHODIUM = "G",
    RESOURCE_ZYNTHIUM = "Z",
    RESOURCE_OXYGEN = "O",
    RESOURCE_HYDROGEN = "H",
    RESOURCE_CATALYST = "X",
    RESOURCE_HYDROXIDE = "OH",
    RESOURCE_ZYNTHIUM_KEANITE = "ZK",
    RESOURCE_UTRIUM_LEMERGITE = "UL",
    RESOURCE_UTRIUM_HYDRIDE = "UH",
    RESOURCE_UTRIUM_OXIDE = "UO",
    RESOURCE_KEANIUM_HYDRIDE = "KH",
    RESOURCE_KEANIUM_OXIDE = "KO",
    RESOURCE_LEMERGIUM_HYDRIDE = "LH",
    RESOURCE_LEMERGIUM_OXIDE = "LO",
    RESOURCE_ZYNTHIUM_HYDRIDE = "ZH",
    RESOURCE_ZYNTHIUM_OXIDE = "ZO",
    RESOURCE_GHODIUM_HYDRIDE = "GH",
    RESOURCE_GHODIUM_OXIDE = "GO",
    RESOURCE_UTRIUM_ACID = "UH2O",
    RESOURCE_UTRIUM_ALKALIDE = "UHO2",
    RESOURCE_KEANIUM_ACID = "KH2O",
    RESOURCE_KEANIUM_ALKALIDE = "KHO2",
    RESOURCE_LEMERGIUM_ACID = "LH2O",
    RESOURCE_LEMERGIUM_ALKALIDE = "LHO2",
    RESOURCE_ZYNTHIUM_ACID = "ZH2O",
    RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2",
    RESOURCE_GHODIUM_ACID = "GH2O",
    RESOURCE_GHODIUM_ALKALIDE = "GHO2",
    RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O",
    RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2",
    RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O",
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2",
    RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O",
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2",
    RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O",
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "ZXHO2",
    RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O",
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2"
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
    LOOK_CREEPS = "creep",
    LOOK_ENERGY = "energy",
    LOOK_RESOURCES = "resource",
    LOOK_SOURCES = "source",
    LOOK_MINERALS = "mineral",
    LOOK_STRUCTURES = "structure",
    LOOK_FLAGS = "flag",
    LOOK_CONSTRUCTION_SITES = "constructionSite",
    LOOK_NUKES = "nuke",
    LOOK_TERRAIN = "terrain"
}

declare const enum OrderType {
    ORDER_SELL = "sell",
    ORDER_BUY = "buy"
}