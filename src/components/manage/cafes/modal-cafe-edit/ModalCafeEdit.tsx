import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, MapPin, Clock, Image, Pencil } from "lucide-react";
import { toast } from "sonner";
import { Cafe, CafeSchema } from "@/schemas/cafe.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useCafes } from "@/hooks/useCafes";
import { z } from "zod";

interface ModalCafeEditProps {
  cafe: Cafe;
}

const weekdays = [
  { id: 1, label: "Monday" },
  { id: 2, label: "Tuesday" },
  { id: 3, label: "Wednesday" },
  { id: 4, label: "Thursday" },
  { id: 5, label: "Friday" },
  { id: 6, label: "Saturday" },
  { id: 7, label: "Sunday" },
];

export default function ModalCafeEdit({ cafe }: ModalCafeEditProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateCafe } = useCafes();

  const form = useForm<Cafe>({
    resolver: zodResolver(CafeSchema),
    defaultValues: cafe,
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof CafeSchema>) => {
      setIsSubmitting(true);
      try {
        const validateFields = CafeSchema.safeParse(data);
        if (!validateFields.success) {
          toast.error("Invalid Fields");
          return;
        }
        await updateCafe.mutateAsync(validateFields.data);
        setOpen(false);
      } catch (error) {
        toast.error("Error updating cafe");
      } finally {
        setIsSubmitting(false);
      }
    },
    [updateCafe]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-primaryColor hover:text-slate-200"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-primaryColor">
        <DialogHeader>
          <DialogTitle className="text-2xl text-textPrimaryColor flex items-center gap-2">
            <Coffee className="h-6 w-6" /> Edit Cafe
          </DialogTitle>
          <DialogDescription className="text-slate-200 text-lg">
            Update the cafe details below. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            id="edit-cafe-form"
          >
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 bg-primaryColor border border-coffeeBeanColor/10">
                <TabsTrigger
                  value="basic"
                  className="data-[state=active]:bg-buttonColor data-[state=active]:text-white"
                >
                  <Coffee className="h-4 w-4 mr-2" /> Basic Info
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="data-[state=active]:bg-buttonColor data-[state=active]:text-white"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Location
                </TabsTrigger>
                <TabsTrigger
                  value="operation"
                  className="data-[state=active]:bg-buttonColor data-[state=active]:text-white"
                >
                  <Clock className="h-4 w-4 mr-2" /> Operation
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-buttonColor data-[state=active]:text-white"
                >
                  <Image className="h-4 w-4 mr-2" /> Features
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="grid gap-4 p-4 rounded-lg bg-primaryColor/20 border border-coffeeBeanColor/10">
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
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
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
                          <Input
                            placeholder="Enter thumbnail URL"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                        <p className="text-coffeeBeanColor/70">
                          Provide a URL for the main image of your cafe
                        </p>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cafeDetails.phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Owner Username
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            placeholder="Enter username"
                            {...field}
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="location" className="space-y-4">
                <div className="grid gap-4 p-4 rounded-lg bg-primaryColor/20 border border-coffeeBeanColor/10">
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
                            <Input
                              placeholder="Enter city"
                              {...field}
                              className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                            />
                          </FormControl>
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
                            <Input
                              placeholder="Enter district"
                              {...field}
                              className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                            />
                          </FormControl>
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
                              className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                            />
                          </FormControl>
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
                              className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                            />
                          </FormControl>
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
                            className="border-buttonHoverColor focus:border-buttonHoverTextLightColor text-slate-200 text-lg"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="operation" className="space-y-4">
                <div className="grid gap-4 p-4 rounded-lg bg-primaryColor/20 border border-coffeeBeanColor/10">
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
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="cafeDetails.cafeOperation.openingDay"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-textPrimaryColor text-lg font-medium">
                          Opening Days
                        </FormLabel>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                          {weekdays.map((day) => (
                            <div
                              key={day.id}
                              className="flex flex-row items-start space-x-3 space-y-0 group"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={(field.value || []).includes(day.id)}
                                  onCheckedChange={(checked) => {
                                    const currentDays = field.value || [];
                                    const newDays = checked
                                      ? [...currentDays, day.id]
                                      : currentDays.filter(
                                          (id) => id !== day.id
                                        );
                                    field.onChange(newDays);
                                  }}
                                  className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor group-hover:border-buttonHoverTextLightColor"
                                />
                              </FormControl>
                              <label className="font-normal text-textPrimaryColor group-hover:cursor-pointer group-hover:text-buttonHoverTextLightColor">
                                {day.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <div className="grid gap-4 p-4 rounded-lg bg-primaryColor/20 border border-coffeeBeanColor/10">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="isTodayMenu"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-coffeeBeanColor/20 p-4 hover:border-buttonColor transition-colors">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-textPrimaryColor">
                              Today's Menu
                            </FormLabel>
                            <p className="text-coffeeBeanColor/70">
                              Cafe has special menu today
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isOnPromotion"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-coffeeBeanColor/20 p-4 hover:border-buttonColor transition-colors">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-textPrimaryColor">
                              On Promotion
                            </FormLabel>
                            <p className="text-coffeeBeanColor/70">
                              Cafe has active promotions
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="isHoldingEvents"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-coffeeBeanColor/20 p-4 hover:border-buttonColor transition-colors">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-textPrimaryColor">
                              Holding Events
                            </FormLabel>
                            <p className="text-coffeeBeanColor/70">
                              Cafe is currently hosting events
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isCOTY"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-coffeeBeanColor/20 p-4 hover:border-buttonColor transition-colors">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-buttonHoverColor data-[state=checked]:bg-buttonHoverColor"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-textPrimaryColor">
                              Cafe of the Year
                            </FormLabel>
                            <p className="text-coffeeBeanColor/70">
                              Mark as a top-rated cafe
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="flex justify-between px-0 border-t border-coffeeBeanColor/10 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="border-coffeeBeanColor/20 hover:bg-coffeeBeanColor/10 hover:text-textPrimaryColor"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-buttonColor hover:bg-buttonHoverColor text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Saving...
                  </div>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
