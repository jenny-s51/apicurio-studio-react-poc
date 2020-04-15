import React from "react";
import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Title,
  Text,
  TextVariants
} from "@patternfly/react-core";
import { GlobalContext } from "../../../../context";
import { ApiActivityItem } from "../apiActivityItem/apiActivityItem";

export const ApiNotificationDrawer = () => {
  const { recentActivity } = { ...React.useContext(GlobalContext).store };
  console.log(recentActivity);

  return (
    <DrawerPanelContent>
      <DrawerHead>
        <Title size="lg" headingLevel="h3">
          Recent Activity
        </Title>
      </DrawerHead>
      <DrawerPanelBody noPadding>
        <DataList
          aria-label="app-data-list-notification-drawer"
          key="notification-drawer"
        >
          {recentActivity.length === 0 ? (
            <Text component={TextVariants.p}>No recent data</Text>
          ) : (
            <React.Fragment>
              {recentActivity.map((activity, index) => (
                <DataListItem
                  aria-labelledby={`data-list-item-${index}`}
                  key={index}
                >
                  <DataListItemRow>
                    <DataListItemCells
                      dataListCells={[
                        <DataListCell key="1">
                          <ApiActivityItem
                            activityApiName={activity.apiName}
                            activityType={activity.type}
                            activityOn={activity.on}
                            activityData={activity.data}
                          />
                        </DataListCell>
                      ]}
                    />
                  </DataListItemRow>
                </DataListItem>
              ))}
            </React.Fragment>
          )}
        </DataList>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
};

export default ApiNotificationDrawer;
