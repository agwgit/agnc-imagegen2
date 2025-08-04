import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const Frame = (): JSX.Element => {
  // Brand metrics data
  const brandMetrics = [
    {
      name: "CREATIVE SPECTRUM",
      score: 95,
      color: "bg-[#f79337]",
      textColor: "text-[#f9ae69]",
      width: "w-[95%]",
    },
    {
      name: "STARTUP ENERGY",
      score: 81,
      color: "bg-[#4e82cf]",
      textColor: "text-white",
      width: "w-[81%]",
    },
    {
      name: "ENTERTAINMENT ELECTRIC",
      score: 72,
      color: "bg-[#4e82cf]",
      textColor: "text-white",
      width: "w-[72%]",
    },
  ];

  // Similar brands data
  const similarBrands = ["LINKEDIN", "CANVA", "CANVA"];

  return (
    <div className="flex flex-col min-h-screen items-start justify-center gap-2.5 pt-[88px] pb-9 px-[120px] relative [background:radial-gradient(50%_50%_at_50%_100%,rgba(7,20,39,1)_0%,rgba(7,20,39,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url(..//frame-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <Card className="flex flex-col items-start gap-9 pt-[120px] pb-12 px-0 flex-1 self-stretch w-full grow rounded-[48px] border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_0px_1px_40px_#143b754c,inset_0px_4px_18px_#143b754c,inset_0px_98px_100px_-48px_#0e284e4c,inset_0px_-82px_68px_-64px_#0e284e4c,inset_0px_7px_11px_-4px_#ffffff33,inset_0px_39px_56px_-36px_#ffffff26] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//frame-2.png)_50%_50%_/_cover]">
        <CardContent className="flex flex-col items-start self-stretch w-full p-0">
          <div className="flex flex-col items-start self-stretch w-full">
            <div className="w-[840px] h-[58px] items-start gap-6 px-12 py-0 flex">
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-light text-white text-5xl tracking-[0] leading-[normal]">
                My brand style is...
              </h2>
            </div>

            <div className="flex w-[840px] h-[122px] items-center gap-2.5 px-12 py-0">
              <h1 className="relative w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[80px] tracking-[0] leading-[normal]">
                ✨ Spectrum Spark
              </h1>
            </div>
          </div>

          <div className="items-center gap-3 px-12 py-6 self-stretch w-full flex">
            <Badge className="px-4 py-[9px] rounded-[50px] border-2 border-solid border-[#f79337] bg-transparent">
              <span className="mt-[-2.00px] [font-family:'Space_Mono',Helvetica] font-bold text-white text-2xl text-center tracking-[0.08px] leading-[normal]">
                CREATIVE SPECTRUM
              </span>
            </Badge>

            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              x
            </div>

            <Badge className="px-4 py-[9px] rounded-[50px] border-2 border-solid border-[#4e82cf] bg-transparent">
              <span className="mt-[-2.00px] [font-family:'Space_Mono',Helvetica] font-bold text-white text-2xl text-center tracking-[0.08px] leading-[normal]">
                STARTUP ENERGY
              </span>
            </Badge>
          </div>
        </CardContent>

        <div className="flex flex-col items-start gap-2.5 px-12 py-6 relative self-stretch w-full border-[0.5px] border-solid border-[#1a1a1e99] shadow-[0px_4px_4px_#00000040]">
          <Card className="flex flex-col items-start gap-2.5 p-12 self-stretch w-full bg-[#00000099] rounded-3xl shadow-[0px_0px_48px_#ffffff1f] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
            <CardContent className="p-0 w-full">
              {brandMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[18px] self-stretch w-full flex-col mb-6 last:mb-0"
                >
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
                    {metric.name}
                  </h3>

                  <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
                    <div className="relative self-stretch w-full h-1.5 bg-[#ffffff33]">
                      <div
                        className={`h-1.5 ${metric.color} ${metric.width}`}
                      />
                    </div>

                    <div className="relative w-fit [font-family:'Space_Mono',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[normal]">
                      <span className={`font-bold ${metric.textColor}`}>
                        {metric.score}
                      </span>
                      <span className="text-[#ffffffcc]">/100</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="items-start gap-2.5 px-12 py-0 self-stretch w-full flex">
          <blockquote className="relative flex-1 mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[normal]">
            &quot;Playful invention with a rapid, agile core. Spectrum Spark
            snaps together color and movement.&quot;
          </blockquote>
        </div>

        <div className="flex flex-col items-start gap-2.5 px-12 py-0 relative flex-1 self-stretch w-full grow">
          <h4 className="relative self-stretch mt-[-1.00px] opacity-50 [font-family:'Space_Mono',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
            OTHER BRANDS THAT ARE &quot;SPECTRUM SPARK&quot;
          </h4>

          <div className="flex items-start gap-3 relative self-stretch w-full">
            {similarBrands.map((brand, index) => (
              <Badge
                key={index}
                className="px-4 py-[9px] bg-[#63260399] rounded-[50px]"
              >
                <span className="mt-[-2.00px] [font-family:'Space_Mono',Helvetica] font-bold text-[#f79337] text-2xl text-center tracking-[0.08px] leading-[normal]">
                  {brand}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-col items-start gap-2.5 px-12 py-0 self-stretch w-full flex">
          <p className="relative w-[402px] mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
            GET A FREE BRAND SCAN, INSIGHTS AND YOUR OWN STYLE PROFILE FOR FREE
            AT:
          </p>

          <div className="inline-flex items-center gap-[31.14px] flex-col">
            <div className="gap-[19.46px] inline-flex items-center justify-center">
              <a
                href="https://agnc.pro/brand-scanner"
                className="relative w-fit mt-[-1.95px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f9ae69] text-2xl tracking-[0] leading-[normal] underline"
              >
                agnc.pro/brand-scanner
              </a>
            </div>
          </div>
        </div>
      </Card>

      <footer className="flex flex-col items-center justify-center gap-2.5 px-0 py-6 relative self-stretch w-full">
        <p className="relative w-[462px] mt-[-1.00px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
          This style profile was made by the Brand Scanner™, brought to you by
          AGNC Studio (agnc.pro)
        </p>

        <div className="flex w-[100px] h-[43px] items-center justify-center gap-2.5 p-2.5">
          <img
            className="relative w-[78.2px] h-[22.2px]"
            alt="AGNC Studio logo"
            src="/agnc.svg"
          />
        </div>
      </footer>

      <div className="absolute inset-0 blur-sm opacity-30 bg-[url(/stars.svg)] bg-cover bg-[50%_50%] pointer-events-none" />
    </div>
  );
};
