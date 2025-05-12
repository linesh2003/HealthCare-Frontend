import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const StatsCard = ({ title, value, icon, color }) => {
  return (
    <Card className="w-full">
      <CardBody className="flex items-center gap-4">
        <div className={`rounded-medium bg-${color}-100 p-3`}>
          <Icon icon={icon} className={`h-6 w-6 text-${color}-500`} />
        </div>
        <div>
          <p className="text-small text-default-500">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </CardBody>
    </Card>
  );
};
