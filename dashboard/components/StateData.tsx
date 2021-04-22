import React from "react";
import { timeParse } from "d3";
import { StateDataType } from "../interfaces";
import { MobilityData } from "./MobilityData";
import { Timeline } from "./Timeline";
import { RestrictionsTimeline } from "./RestrictionsTimeline";

type Props = {
  data: StateDataType;
};

export const StateData = ({ data }: Props) => {
  return (
    <div className="p-6 px-10 lg:px-20" id={data.name}>
      <div className="flex align-center">
        <h1 className="title relative">
          {/* <a
            className="font-light text-gray-300 absolute right-full mr-4"
            href={`#${state}`}
          >
            #
          </a> */}
          {data.name}
        </h1>
      </div>

      <section className="mt-6 mb-24">
        <h2 className="heading">
          Mobility{" "}
          <span className="font-extralight">(Change from baseline)</span>
        </h2>
        <MobilityData data={data["mobility"]} />
      </section>

      <section className="mt-6 mb-44">
        <h2 className="heading">Restrictions</h2>
        <RestrictionsTimeline
          data={data["restrictions"]}
          xAccessor={xAccessor}
        />
      </section>

      <section className="mt-6 mb-24">
        <h2 className="heading">COVID Cases</h2>
        <Timeline
          data={data["covidStats"]}
          xAccessor={xAccessor}
          yAccessors={[(d) => d["Cases_Total"]]}
        />
        <h2 className="heading">COVID Deaths</h2>
        <Timeline
          data={data["covidStats"]}
          xAccessor={xAccessor}
          yAccessors={[(d) => d["Deaths_Total"]]}
        />
      </section>
    </div>
  );
};

const parseDate = timeParse("%Y%m%d");
const xAccessor = (d: any) => parseDate(d["Date"]);