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
  content: z.string(),
  createDate: z.string(),
});

const CafeThemeColorSchema = z.object({
  primaryColor: z.string(),
  secondaryColor: z.string(),
});

const CafeLocationSchema = z.object({
  city: z.string(),
  houseNumber: z.string(),
  street: z.string(),
  district: z.string(),
  ward: z.string(),
});

const CafeOperationSchema = z.object({
  openingTime: z.string(),
  closingTime: z.string(),
  openingDay: z.array(z.number()),
});

const CafeCategorySchema = z.object({
  id: z.string(),
  cafeCategoryName: z.string(),
});

const CafeDetailSchema = z.object({
  title: z.string(),
  content: z.string(),
  thumbnail: z.string(),
  phoneNumber: z.string(),
  contentImg: z.array(z.string()),
  cafeLogo: z.string(),
  cafeOperation: CafeOperationSchema,
  cafeLocation: CafeLocationSchema,
  cafeCategory: z.array(CafeCategorySchema),
  cafeTheme: CafeThemeColorSchema,
});

const CafeSchema = z.object({
  id: z.string(),
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
