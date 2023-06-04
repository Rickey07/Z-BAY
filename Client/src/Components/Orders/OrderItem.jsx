import { ArrowForward } from "@mui/icons-material";
import {
  Chip,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import formatDate from '../../helpers/Common/DateFormatter'
import { Link } from "react-router-dom";

const OrderItem = ({
  handleClick,
  order_id,
  amount,
  createdAt,
  status,
  id,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const formattedDate = formatDate(createdAt)


  return (
    <div>
      <Link to={`/dashboard/orders/${id}`} style={{ textDecoration: "none" }}>
        <Paper
          component={"div"}
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            mb: 3,
            flexWrap: mobile && "wrap",
          }}
        >
          <Typography component={"p"}>{order_id}</Typography>
          <Chip
            size="small"
            label={status}
          />
          <Typography component={"p"}>{formattedDate}</Typography>
          <Typography component={"p"} sx={{ fontWeight: "bold" }}>
            ₹{amount}
          </Typography>
          {!mobile && <ArrowForward />}
        </Paper>
      </Link>
    </div>
  );
};

export default OrderItem;
