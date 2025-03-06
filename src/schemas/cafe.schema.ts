import { z } from "zod";

export const AdvanceFilterSearchCafeSchema = z.object({
  cafeName: z.string().optional(),
  city: z.string().optional(),
  district: z.string().optional(),
  price: z.number().int().optional(),
  isBestChoice: z.boolean().optional(),
  isHoldingEvents: z.boolean().optional(),
  isOnPromotions: z.boolean().optional(),
  cafeCategory: z.array(z.number().int()).optional(),
});

const CafeCommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  createDate: z.string(),
});

const CafeLocationSchema = z.object({
  city: z.string().min(1, { message: "City is required" }),
  houseNumber: z.string().min(1, { message: "House number is required" }),
  street: z.string().min(1, { message: "Street is required" }),
  district: z.string().min(1, { message: "District is required" }),
  ward: z.string().min(1, { message: "Ward is required" }),
});

const CafeOperationSchema = z.object({
  openingTime: z.string().min(1, { message: "Opening time is required" }),
  closingTime: z.string().min(1, { message: "Closing time is required" }),
  openingDay: z.array(z.number()).min(3, { message: "Opening day is required at least 3 days" }),
});

const CafeCategorySchema = z.object({
  id: z.string().optional(),
  cafeCategoryName: z.string().optional(),
});

const CafeDetailSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  thumbnail: z.string().min(1, { message: "Thumbnail is required" }),
  phoneNumber: z.string().optional(),
  contentImg: z.array(z.string()),
  cafeBrand: z.object({
    id: z.string(),
    cafeBrandLogo: z.string(),
    cafeBrandName: z.string(),
  }).optional(),
  cafeOperation: CafeOperationSchema,
  cafeLocation: CafeLocationSchema,
  cafeCategory: z.array(CafeCategorySchema).optional(),
});

const CafeSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  createDate: z.string(),
  cafeDetails: CafeDetailSchema,
  cafeComments: z.array(CafeCommentSchema).optional(),
  totalLike: z.number(),
  totalDislike: z.number(),
  totalComment: z.number(),
  totalShare: z.number(),
  isTodayMenu: z.boolean(),
  isOnPromotion: z.boolean(),
  isHoldingEvents: z.boolean(),
  isCOTY: z.boolean(),
});

export type Cafe = z.infer<typeof CafeSchema>;
export { CafeSchema };
