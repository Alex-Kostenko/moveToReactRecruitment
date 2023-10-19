import React, { useState } from 'react';

import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import LineHeader from '@/asset/icon/LineHeader.svg';
import { Button } from '@/components';
import { useGlobalContext } from '@/context';
import { createAPI } from '@/service/api';

import styles from './header.module.scss';

enum PageType {
  SignIn = 'signIn',
  SignUp = 'signUp',
  ForgotPassword = 'forgot-password',
  ChangePassword = 'change-password',
}

type MenuItem = {
  name: string;
  route: string;
};

interface HeaderProps {
  menuItems: MenuItem[];
  isAuthorized?: boolean;
}

const HeaderLine = styled.div`
  background-image: url(${LineHeader});
  height: 20px;
  padding: 1px;
`;

const MenuList: React.FC<{ items: MenuItem[] }> = ({ items }) => (
  <ul className={styles.menu}>
    {items.map((item) => (
      <li className={styles.linkWrapper} key={item.name}>
        <Link className={styles.link} title={item.name} to={item.route}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const MainHeader: React.FC<HeaderProps> = ({ menuItems }) => {
  const { token, setToken } = useGlobalContext();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPathname = pathname!;
  const isDefaultPage = currentPathname === '/';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const api = createAPI({
      method: 'POST',
    });
    await api.logOut({});
    Cookies.remove('auth');
    setToken('');

    navigate('/');
  };

  if (
    currentPathname.includes(PageType.SignIn) ||
    currentPathname.includes(PageType.SignUp) ||
    currentPathname.includes(PageType.ChangePassword) ||
    currentPathname.includes(PageType.ForgotPassword)
  ) {
    return <></>;
  }

  return (
    <div
      className={classNames(styles.headerWrapper, {
        [styles.blueBackground]: isDefaultPage,
        [styles.whiteBackground]: !isDefaultPage,
      })}
    >
      <Link className='' to={'/'}>
        <div className={styles.head}>
          {/* <Image alt='logo' quality={100} src={logo} /> */}
          {/* <Logo /> */}
          <h1 className={styles.head__title}>Recruitment Platform</h1>
        </div>
      </Link>
      <nav className={styles.linksWrapper}>
        <MenuList items={menuItems} />
      </nav>

      <div className={styles.rightAuth}>
        {token ? (
          <>
            <div className={styles.rightLogo}>
              <Link to={'/employee'}>My employee list</Link>
              <Link to={'/employee/create'}>
                <Button text='Create Employee' variant='createEmployee' />
              </Link>
              {/* <div className={styles.lineHeader}></div> */}
              <HeaderLine />
              <IconButton onClick={handleOpenMenu}>
                <div className={styles.logo}>
                  {/* {employeeData.firstName.charAt(0)}
              {employeeData.secondName.charAt(0)} */}
                  YK
                </div>
              </IconButton>
            </div>
            <Menu
              anchorEl={anchorEl}
              id='auth-menu'
              keepMounted
              onClose={handleCloseMenu}
              open={Boolean(anchorEl)}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Link to={'/signIn'}>
            <Button text='Sign In' variant='cv' />
          </Link>
        )}
      </div>
    </div>
  );
};

export { MainHeader };
