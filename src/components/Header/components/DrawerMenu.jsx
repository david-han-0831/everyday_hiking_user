import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

const navItems = ["커뮤니티", "스토어", "리뷰"];

export default function DrawerMenu({ onClose }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Box onClick={onClose} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        매일등산
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} href={`/${item.toLowerCase()}`}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          {isLoggedIn ? (
            <ListItemButton component={Link} href="/mypage">
              <ListItemText primary="마이페이지" />
            </ListItemButton>
          ) : (
            <ListItemButton component={Link} href="/login">
              <ListItemText primary="로그인" />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );
}
