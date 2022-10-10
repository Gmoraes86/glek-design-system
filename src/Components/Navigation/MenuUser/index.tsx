import React, { useState } from 'react';

import { Avatar, Box, Divider, Icon, ThemeToggle, Typography } from '../../../Components';
import useOuterClick from '../../../Hooks/useOuterClick';
import {
  Clickable,
  CollapseContainer,
  Container,
  IconDiv,
  Input,
  Item,
  ItemsContainer,
  MenuTitle,
} from './styles';

interface MenuProps {
  userName: string;
  // children?: ReactElement[],
  valuesArray: { label: string; value: string }[];
  router?: boolean;
  onLogout: () => void;
  onChangePassword: () => void;
  onThemeChange: () => void;
  theme?: 'dark' | 'light';
}

const MenuUser = ({
  userName,
  onLogout,
  onChangePassword,
  onThemeChange,
  theme,
  ...rest
}: MenuProps) => {
  const [collapse, setCollapse] = useState(true);
  const wrapperRef = useOuterClick(() => {
    setCollapse(true);
  });

  const [themeToggle, setThemeToggle] = useState(theme === 'dark');

  const handleThemeChange = () => {
    setThemeToggle(!themeToggle);
    onThemeChange();
  };

  return (
    <Container ref={wrapperRef} onClick={() => setCollapse(false)}>
      <Clickable>
        <Avatar />
        <Input>
          <Typography variant="d1">{userName}</Typography>
        </Input>
        <IconDiv collapse={collapse}>
          <Icon icon="arrowDown" color="grey" />
        </IconDiv>
      </Clickable>
      {!collapse && (
        <CollapseContainer>
          <MenuTitle>
            <Avatar />
            <Input>
              <Typography variant="d1">{userName}</Typography>
            </Input>
          </MenuTitle>
          <ItemsContainer>
            <Item
              onClick={() => {
                setCollapse(true);
                onChangePassword();
              }}
              {...rest}
            >
              <Icon icon="key" color="grey" size="md" />
              <Typography variant="d1">Alterar senha</Typography>
            </Item>
            <Item {...rest}>
              <Icon icon="adjust" color="grey" size="md" />
              <Typography variant="d1">Tema</Typography>
              <ThemeToggle name="theme-toggle" theme={themeToggle} onChange={handleThemeChange} />
            </Item>
            <Box margin={[10, 0, 10, 0]}>
              <Divider />
            </Box>
            <Item
              onClick={() => {
                setCollapse(true);
                onLogout();
              }}
              {...rest}
            >
              <Icon icon="arrowToRight" color="grey" size="md" />
              <Typography variant="d1">Sair</Typography>
            </Item>
          </ItemsContainer>
        </CollapseContainer>
      )}
    </Container>
  );
};

export default MenuUser;
