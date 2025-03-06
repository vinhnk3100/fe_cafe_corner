"use client";

import { useCafes } from "@/hooks/useCafes";
import { useNavigation } from "@/providers/navigation-provider";
import { CafeSchema } from "@/schemas/cafe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Coffee, MapPin, Clock, Image, Phone, ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CafeCreationPage = () => {
  const { stopLoading } = useNavigation();
  const { createCafe } = useCafes();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof CafeSchema>>({
    resolver: zodResolver(CafeSchema.omit({ id: true })),
    defaultValues: {
      username: "",
      createDate: new Date().toISOString(),
      cafeDetails: {
        title: "",
        thumbnail: "",
        phoneNumber: "",
        contentImg: [],
        cafeOperation: {
          openingTime: "",
          closingTime: "",
          openingDay: [],
        },
        cafeLocation: {
          city: "",
          houseNumber: "",
          street: "",
          district: "",
          ward: "",
        },
        cafeCategory: [],
      },
      totalLike: 0,
      totalDislike: 0,
      totalComment: 0,
      totalShare: 0,
      isTodayMenu: false,
      isOnPromotion: false,
      isHoldingEvents: false,
      isCOTY: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof CafeSchema>) => {
    setIsSubmitting(true);
    try {
      const validateFields = CafeSchema.safeParse(data);
      console.log(validateFields);
      if (!validateFields.success) {
        toast.error("Invalid fields");
        return;
      }
      await createCafe.mutateAsync(data);
      toast.success("Cafe created successfully!");
      router.push("/cafes");
    } catch (error) {
      toast.error("Error creating cafe");
      console.error("Error creating cafe", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Stop loading when page is loaded
  useEffect(() => {
    stopLoading();
  }, [stopLoading]);

  const weekdays = [
    { id: 1, label: "Monday" },
    { id: 2, label: "Tuesday" },
    { id: 3, label: "Wednesday" },
    { id: 4, label: "Thursday" },
    { id: 5, label: "Friday" },
    { id: 6, label: "Saturday" },
    { id: 7, label: "Sunday" },
  ];

  return (
    <div className="w-full mx-auto max-w-4xl bg-primaryColor container my-8">
      <div className="bg-primaryColor border-b border-coffeeBeanColor/10 px-6">
        <div className="text-4xl flex items-center gap-2 text-textPrimaryColor font-bold">
          <Coffee className="h-12 w-12" /> Create New Cafe
        </div>
        <div className="text-white text-lg font-medium mt-3">
          Fill in the details to add a new cafe to the platform
        </div>
      </div>
      <div className="px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information Section */}
            <div className="grid gap-6 p-6 rounded-lg bg-primaryColor border border-coffeeBeanColor/10">
              <h3 className="text-2xl font-semibold text-textPrimaryColor flex items-center gap-2">
                <Coffee className="h-5 w-5" /> Basic Information
              </h3>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="cafeDetails.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-textPrimaryColor text-lg font-medium">
                        Cafe Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter cafe name"
                          {...field}
                          className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cafeDetails.thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-textPrimaryColor text-lg font-medium">
                        Thumbnail URL
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Enter thumbnail URL"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="border-buttonColor hover:bg-buttonHoverColor"
                          >
                            <ImageIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormDescription className="text-slate-200">
                        Provide a URL for the main image of your cafe
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cafeDetails.phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-textPrimaryColor text-lg font-medium">
                        Cafe Phone Number (optional)
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Enter phone number"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="border-buttonColor hover:bg-buttonHoverColor"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Location Section */}
            <div className="grid gap-6 p-6 rounded-lg bg-primaryColor border border-coffeeBeanColor/10">
              <h3 className="text-2xl font-semibold text-textPrimaryColor flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Location Details
              </h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeLocation.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          City
                        </FormLabel>
                        <FormControl>
                          <Select {...field} onValueChange={field.onChange}>
                            <SelectTrigger className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200">
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Hồ Chí Minh">
                                TP. Hồ Chí Minh
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeLocation.district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          District
                        </FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={field.onChange}
                            disabled={
                              !form.getValues("cafeDetails.cafeLocation.city")
                            }
                          >
                            <SelectTrigger className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200">
                              <SelectValue placeholder="Select District" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                              <SelectItem value="7">7</SelectItem>
                              <SelectItem value="8">8</SelectItem>
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="11">11</SelectItem>
                              <SelectItem value="12">12</SelectItem>
                              <SelectItem value="Bình Thạnh">
                                Bình Thạnh
                              </SelectItem>
                              <SelectItem value="Gò Vấp">Gò Vấp</SelectItem>
                              <SelectItem value="Phú Nhuận">
                                Phú Nhuận
                              </SelectItem>
                              <SelectItem value="Tân Bình">Tân Bình</SelectItem>
                              <SelectItem value="Tân Phú">Tân Phú</SelectItem>
                              <SelectItem value="Bình Tân">Bình Tân</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeLocation.ward"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Ward
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter ward"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeLocation.houseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          House Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter house number"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="cafeDetails.cafeLocation.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-textPrimaryColor text-lg font-medium">
                        Street
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter street"
                          {...field}
                          className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Operation Hours Section */}
            <div className="grid gap-6 p-6 rounded-lg bg-primaryColor border border-coffeeBeanColor/10">
              <h3 className="text-2xl font-semibold text-textPrimaryColor flex items-center gap-2">
                <Clock className="h-5 w-5" /> Operation Hours
              </h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeOperation.openingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Opening Time
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeOperation.closingTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Closing Time
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormItem>
                  <FormLabel className="text-textPrimaryColor text-lg font-medium">
                    Opening Days
                  </FormLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                    {weekdays.map((day) => (
                      <FormField
                        key={day.id}
                        control={form.control}
                        name="cafeDetails.cafeOperation.openingDay"
                        render={({ field }) => (
                          <FormItem
                            key={day.id}
                            className="flex flex-row items-start space-x-3 space-y-0 group"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(day.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, day.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: number) => value !== day.id
                                        )
                                      );
                                }}
                                className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor group-hover:border-buttonHoverTextLightColor"
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-textPrimaryColor group-hover:cursor-pointer group-hover:text-buttonHoverTextLightColor">
                              {day.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-red-500 text-sm pt-4">
                    {
                      form.formState.errors.cafeDetails?.cafeOperation
                        ?.openingDay?.message
                    }
                  </div>
                </FormItem>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid gap-6 p-6 rounded-lg bg-primaryColor border border-coffeeBeanColor/10">
              <h3 className="text-2xl font-semibold text-textPrimaryColor flex items-center gap-2">
                <ImageIcon className="h-5 w-5" /> Cafe Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="isTodayMenu"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 border-buttonColor transition-colors group">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-buttonColor border-buttonColor group-hover:border-buttonHoverTextLightColor mt-4"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Today Special Menu
                        </FormLabel>
                        <FormDescription className="text-slate-200">
                          Cafe has special menu today
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isOnPromotion"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 border-buttonColor transition-colors group">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-buttonColor border-buttonColor group-hover:border-buttonHoverTextLightColor mt-4"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          On Promotion
                        </FormLabel>
                        <FormDescription className="text-slate-200">
                          Cafe has active promotions
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isHoldingEvents"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 border-buttonColor transition-colors group">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-buttonColor border-buttonColor group-hover:border-buttonHoverTextLightColor mt-4"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Holding Events
                        </FormLabel>
                        <FormDescription className="text-slate-200">
                          Cafe is currently hosting events
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-6">
              {/* Create Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-buttonColor text-white text-lg font-semibold rounded-lg transition-all 
               duration-300 ease-in-out hover:bg-buttonHoverColor 
               disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Brewing New Cafe...
                  </div>
                ) : (
                  "Add New Cafe"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CafeCreationPage;
