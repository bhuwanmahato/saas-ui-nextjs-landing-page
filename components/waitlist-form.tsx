'use client'

import { Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react'

import { useState } from 'react'

export const WaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'You have been added to the waitlist.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setEmail('')
      } else {
        throw new Error(data.error || 'Failed to join waitlist')
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.error('Waitlist submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          required
          bg="white"
          _dark={{ bg: 'gray.800' }}
        />
        <Button
          type="submit"
          colorScheme="primary"
          size="lg"
          width="full"
          isLoading={loading}
        >
          Join the Waitlist
        </Button>
      </VStack>
    </Box>
  )
}
