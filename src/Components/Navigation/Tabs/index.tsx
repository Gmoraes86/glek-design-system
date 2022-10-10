import React, { Children, cloneElement, isValidElement, ReactElement } from 'react';

import { Typography } from '../..';
import { TabContentContainer, TabsContainer, TabsItem } from './styles';

interface TabsMenuProps {
  children: ReactElement<TabsMenuItemProps>[];
  onTabChange?: (tabKey: string) => void;
  defaultActiveTab: string | number;
}

export interface TabsMenuItemProps {
  children: ReactElement | string;
  active?: boolean;
  tabKey: string;
  onClick?: (value: string) => void;
}

export interface TabContentProps {
  children: ReactElement | string;
  padding?: number[];
  margin?: number[];
}

const TabsMenu = ({ children, onTabChange, defaultActiveTab }: TabsMenuProps): ReactElement => {
  const [activeTab, setActiveTab] = React.useState<string>(defaultActiveTab.toString());

  const onClick = (tabKey: string) => {
    setActiveTab(tabKey);
    onTabChange && onTabChange(tabKey);
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        onClick,
        active: activeTab === child.props.tabKey,
      });
    }
    return child;
  });

  return <TabsContainer>{childrenWithProps}</TabsContainer>;
};

const TabsMenuItem = ({
  children,
  active = false,
  tabKey,
  onClick,
}: TabsMenuItemProps): ReactElement => {
  return (
    <TabsItem
      active={active}
      tabKey={tabKey}
      onClick={() => {
        onClick && onClick(tabKey);
      }}
    >
      <Typography variant="body-sb">{children}</Typography>
    </TabsItem>
  );
};

const TabContent = ({ children, margin, padding }: TabContentProps): ReactElement => {
  return (
    <TabContentContainer margin={margin} padding={padding}>
      {children}
    </TabContentContainer>
  );
};

export { TabContent, TabsMenu, TabsMenuItem };
