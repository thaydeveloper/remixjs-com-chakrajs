import { Box, Center, Container, Flex, Image, Text } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";
import api from "~/services/api";

type CommentType = {
  username: string;
  comment: string;
};
type AlbumType = {
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
  console.log(albums);

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
        <Flex key={album.id}>
          <Flex flexDirection="column" textAlign={"center"} gap={"15px"}>
            <Text color="white">{album.title}</Text>
            <Image src={album.image} width={"550px"} height={"800px"} />
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
