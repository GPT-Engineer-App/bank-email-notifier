import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Select, VStack, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("local");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform transaction logic here
    // Send email notifications to sender and receiver
    toast({
      title: "Transaction Successful",
      description: `${amount} USD sent to ${receiverEmail}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form fields
    setSenderEmail("");
    setReceiverEmail("");
    setAmount("");
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Bank of America
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="senderEmail">
            <FormLabel>Sender Email</FormLabel>
            <Input type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} required />
          </FormControl>
          <FormControl id="receiverEmail">
            <FormLabel>Receiver Email</FormLabel>
            <Input type="email" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} required />
          </FormControl>
          <FormControl id="amount">
            <FormLabel>Amount (USD)</FormLabel>
            <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
          </FormControl>
          <FormControl id="transactionType">
            <FormLabel>Transaction Type</FormLabel>
            <Select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
              <option value="local">Local</option>
              <option value="international">International</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" leftIcon={<FaMoneyBillWave />}>
            Send Money
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Index;
