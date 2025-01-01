import { sendSuccessResponse } from '../../helpers';
import { catchAsync } from '../../middlewares';
import { TObject } from '../../utils/type';
import { referrerService } from './referrer.service';

const addReferrer = catchAsync(async (req, res) => {
  const message = await referrerService.addReferrer(req.body);
  sendSuccessResponse(res, { message, data: null });
});

const getReferrers = catchAsync(async (req, res) => {
  const { referrers, meta } = await referrerService.getReferrers(req.query as TObject);
  sendSuccessResponse(res, { message: 'Referrers retrieved successfully', meta, data: referrers });
});

export const referrerController = { addReferrer, getReferrers };