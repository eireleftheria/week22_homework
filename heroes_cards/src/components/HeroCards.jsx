import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

function HeroCard({ props }) {
  const { name, universe, alterego, occupation, friends, superpowers, url } =
    props;
  console.log(name, universe, alterego, occupation);
  return (
    <div>
      <Card maxW="sm" h={635}>
        <CardBody>
          <Image src={url} alt="Hero Image" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading color="red" fontSize="2xl">
              {name}
            </Heading>
            <Text color="blue.600">{universe}</Text>
            <Text>
              <b>Альтерэго:</b> {alterego}
            </Text>
            <Text>
              <b>Род деятельности:</b> {occupation}
            </Text>
            <Text>
              <b>Друзья:</b> {friends}
            </Text>
            <Text>
              <b>Суперсилы:</b> {superpowers}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default HeroCard;
