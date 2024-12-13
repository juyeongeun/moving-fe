export interface MovingRequestBaseData {
  service: number;
  movingDate: string;
  pickupAddress: string;
  dropOffAddress: string;
}

export interface MovingRequesteDataWithCreated extends MovingRequestBaseData {
  createdAt: string;
}

export interface MovingRequestDataWithComplete
  extends MovingRequesteDataWithCreated {
  isCompleted: boolean;
  isEstimateConfirmed: boolean;
}
