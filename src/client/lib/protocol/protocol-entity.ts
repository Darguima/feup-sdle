import { IEntity } from "../proto/global";

export default interface ProtocolEntity {
    toProto(): IEntity;
}
