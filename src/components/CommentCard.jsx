import {
  Box,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import data from "../data.json";
import Votes from "./Votes";
import { AiFillEdit } from "react-icons/ai";
function CommentCard(props) {
  return (
    <Box display={"flex"} bgColor={"white"}>
      <Votes />

      <Box className="comment__body">
        <Box
          className="comment__header"
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"}>
            <Avatar
              name="Segun Adebayo"
              src={data.comments[0].user.image.png}
            />

            <Text>{data.comments[0].createdAt}</Text>
            <Text>{data.currentUser.username}</Text>
          </Box>
          <Box className="buttons">
            <Button leftIcon={<AiFillEdit />} colorScheme="red" variant="link">
              Reply
            </Button>
          </Box>
        </Box>
        <Box className="comment__Content">
          <Text>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CommentCard;
