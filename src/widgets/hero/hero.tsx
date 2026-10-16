import { Logo, Typography } from "@ingamigo/design";
import { PhonePlayer } from "@/shared/ui";
import phone from "@/shared/assets/videos/phone.mp4";

export interface HeroProps {
  service?: string;
  title?: string;
}

export const Hero = ({
  service = "Услуги",
  title = "Всё, что нужно знать про сервис заказа услуг",
}: HeroProps) => {
  return (
    <section className="relative -mx-6 -mt-8 flex flex-col items-center justify-center bg-(--neutral-300) px-6 py-8 text-center sm:-mx-8 md:py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 md:flex-row md:items-stretch md:gap-10">
        <div className="flex flex-col items-center justify-center md:items-start">
          <div className="md:hidden">
            <Logo service={service} size="large" color="inverse" />
          </div>
          <div className="hidden md:block lg:hidden">
            <Logo service={service} size="xlarge" color="inverse" />
          </div>
          <div className="hidden lg:block">
            <Logo service={service} size="2xlarge" color="inverse" />
          </div>

          <Typography
            className="mt-2.5 max-w-125 text-center md:text-left"
            variant="display3"
            color="inverse"
            weight="light"
          >
            {title}
          </Typography>
        </div>

        <PhonePlayer videoSrc={phone} className="md:ml-4" />
      </div>
    </section>
  );
};