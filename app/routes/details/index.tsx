import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { AlbumType } from "../_index";
import { useLocation } from "@remix-run/react";

interface State extends Location {
  state: {
    album: AlbumType;
  };
}

function Details() {
  const { state } = useLocation() as State;

  if (!state?.album) {
    return <></>;
  }

  return (
    <Container
      minWidth="100%"
      minHeight="100vh"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={"32px"}
      justifyContent={"center"}
      paddingTop={"64px"}
    >
      <Flex sx={albumStyles} key={state.album.id}>
        <Flex sx={boxAlbum}>
          <Image sx={imageStyles} src={state.album.image} />
          <Text color="white">{state.album.title}</Text>
          <Text>{state.album.username}</Text>
        </Flex>
      </Flex>
      <Flex sx={commentsContainer}>
        <Text sx={comments}>Comentários</Text>
        {state.album.comments.map((comments) => (
          <Flex
            flexDirection={"column"}
            color={"white"}
            key={comments.username}
          >
            <Text>"{comments.comment}"</Text>
            <Text sx={comments}>{comments.username}</Text>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}

const albumStyles = {
  p: "5",
  alignItems: "center",
  gap: "3",
  width: "600px",
  height: "350px",
  justifyContent: "space-between",
  flexDirection: "column",
  border: "1px solid  #292929",
  bg: "#292929",
  borderRadius: "8px",
  padding: "0",
  textAlign: "start",
  color: "#fff",
  cursor: "pointer",
};
const boxAlbum = {
  width: "full",
  flexDirection: "column",
  textAlign: "center",
  gap: "15px",
};
const imageStyles = {
  minWidth: "full",
  minW: "100%",
  height: "250px",
  objectFit: "cover",
};

const commentsContainer = {
  p: "16px",
  flexDirection: "column",
  w: "300px",
  bg: "#292929",
  borderRadius: "8px",
  textAlign: "center",
};
/* const titleComments = {}; */
const comments = {
  fontSize: "18px",
  fontWeight: "500",
  color: "white",
};

export default Details;
