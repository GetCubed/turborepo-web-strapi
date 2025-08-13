import { AmbientColor } from "@/components/decorations/ambient-color";
import DynamicZoneManager from "@/components/dynamic-zone/manager";

export default function PageContent({ pageData }: { pageData: any }) {
  const dynamicZone = pageData?.dynamic_zone;
  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      {dynamicZone && (
        <DynamicZoneManager
          dynamicZone={dynamicZone}
          locale={pageData.locale}
        />
      )}

      <span className="border-t-8">
        {/* json stringify. beautify this json here */}
        {/* {JSON.stringify(pageData?.dynamic_zone, null, 2)} */}
      </span>
    </div>
  );
}
