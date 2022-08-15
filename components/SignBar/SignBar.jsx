import {
    Box,
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    Checkbox,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LogInForm from "./LogInForm";
import LogInModal from "./LogInModal";
// import SignUpModal from "./SignUpModal";

export default function SignBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return (
        <>
            <Box>
                <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    top="0"
                    right="5"
                    onClick={onOpen}
                    _hover={{
                        bg: "pink.300",
                    }}
                >
                    Login
                </Button>
            </Box>
            {onOpen && <LogInModal isOpen={isOpen} onClose={onClose} />}
            {/* <LogInForm /> */}
        </>
    );
}
