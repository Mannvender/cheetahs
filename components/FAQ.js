import React, { useState } from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const StyledFlex = styled(Flex)`
  color: ${(props) => props.theme.colors.light3};
  &:hover {
    color: ${(props) => props.theme.colors.dark2};
  }
`;
const FaqsSection = ({ faqs }) => {
  const { colors, fonts } = useTheme();
  const [activeFAQs, setActiveFAQs] = useState([]);

  const handleClick = (id) => {
    if (activeFAQs.includes(id)) {
      setActiveFAQs(activeFAQs.filter((item) => item !== id));
    } else {
      setActiveFAQs([...activeFAQs, id]);
    }
  };
  return (
    <Flex
      maxWidth="1000px"
      flexDirection="column"
      height={["auto", "auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="FAQs"
      px={[4, 4, 0]}
      id="faqs"
      sx={{ position: "relative" }}
    >
      <Heading
        fontSize={[5, 8]}
        fontWeight={[600]}
        pt={[4]}
        pb={[4]}
        color={colors.dark}
      >
        FAQs
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        width={["100%"]}
        mb={[5]}
      >
        {faqs.map((faq, i) => (
          <Box
            key={i}
            p={[4]}
            width="100%"
            sx={{
              backgroundColor: colors.dark3,
              cursor: "pointer",
            }}
            mb={[2]}
            onClick={() => handleClick(i)}
          >
            <StyledFlex justifyContent="space-between">
              <Text mr={[3]} fontSize={[2, 3]}>
                {faq.question}
              </Text>
              {activeFAQs.includes(i) ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </StyledFlex>
            <Box
              height={activeFAQs.includes(i) ? faq.height : "0px"}
              sx={{
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              <Text mt={[3]} color={colors.accent5} fontSize={[1, 2]}>
                {faq.answer}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default FaqsSection;
