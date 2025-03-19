'use client'

import { Box, Button, Input, Stack, useToast } from '@chakra-ui/react'
import confetti from 'canvas-confetti'

import { useState } from 'react'

import { supabase } from '../lib/supabase'

export const WaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.from('waitlist').insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          throw new Error('Ops! You are already a member.')
        }
        throw error
      }

      toast({
        title: 'Success!',
        description: 'Congratulations! You become a Beta User.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      confetti({
        particleCount: 500,
        spread: 70,
        origin: { y: 0.6 },
      })
      setEmail('')
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
      <Stack
        spacing={4}
        direction={{ base: 'row', md: 'column' }}
        align={'center'}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size={{ base: 'md', md: 'lg' }} // responsive size
          required
          bg="white"
          _dark={{ bg: 'gray.800' }}
          width={{ base: 'auto', md: 'full' }} // responsive width
        />
        <Button
          type="submit"
          colorScheme="primary"
          size={{ base: 'md', md: 'lg' }} // responsive size
          width={{ base: 'auto', md: 'full' }} // responsive width
          isLoading={loading}
        >
          Join the Waitlist
        </Button>
      </Stack>
    </Box>
  )
}
