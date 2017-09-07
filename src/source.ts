// Updated 2016-02-05
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
