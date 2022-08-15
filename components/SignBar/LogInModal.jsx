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
import React, { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

export default function LogInModal({ isOpen, onClose, toggle}) {
    const [hasAccount, setHasAccount] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>{hasAccount? `Login` : `SignUp`}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            boxShadow={"lg"}
                            p={8}
                        >
                            <Stack spacing={4}>
                                {hasAccount ? (
                                    <LogInForm
                                        toggle={() => setHasAccount(false)}
                                        onClose={onClose}
                                    />
                                ) : (
                                    <SignUpForm toggle={() => setHasAccount(true)} onClose={onClose}  />
                                )}
                            </Stack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}
