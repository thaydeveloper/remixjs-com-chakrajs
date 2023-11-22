import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import api from "~/services/api";

type CommentType = {
  username: string;
  comment: string;
};
export type AlbumType = {
  id: string;
  title: string;
  username: string;
  image: string;
  comments: CommentType[];
};

export async function loader() {
  const response = await api.get("0b498b01-c20f-49d9-8ab6-edda571b4d62");
  return response.data.albums;
}
export default function Index() {
  const albums: AlbumType[] = useLoaderData();
  const navigate = useNavigate();

  return (
    <Container
      minWidth="100%"
      minHeight="100vh"
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={"32px"}
      justifyContent={"center"}
      paddingTop={"64px"}
    >
      {albums.map((album: AlbumType) => (
        <Flex
          sx={albumStyles}
          key={album.id}
          onClick={() => navigate("details", { state: { album } })}
        >
          <Flex sx={boxAlbum}>
            <Image sx={imageStyles} src={album.image} />
            <Text color="white">{album.title}</Text>
            <Text>{album.username}</Text>
          </Flex>
        </Flex>
      ))}
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
