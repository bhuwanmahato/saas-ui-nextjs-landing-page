'use client'

import { Box, Container, Stack } from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { NextPage } from 'next'
// import { babelIncludeRegexes } from 'next/dist/build/webpack-config'
import Image from 'next/image'

import * as React from 'react'

// import { ButtonLink } from '#components/button-link/button-link'
// import { GoldButton } from '#components/coming-soon-button'
// import { Faq } from '#components/faq'
// import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
// import {
//   Highlights,
//   HighlightsItem,
//   HighlightsTestimonialItem,
// } from '#components/highlights'
// import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
// import { Pricing } from '#components/pricing/pricing'
// import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import { WaitlistForm } from '#components/waitlist-form'

// import faq from '#data/faq'
// import pricing from '#data/pricing'
// import testimonials from '#data/testimonials'

// export const metadata: Metadata = {
//   title: 'All your resources in one place | Zenboxx',
//   // description: 'Free SaaS landingspage starter kit',
// }

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      {/* <HighlightsSection /> */}

      {/* <FeaturesSection /> */}

      {/* <TestimonialsSection /> */}

      {/* <PricingSection /> */}

      {/* <FaqSection /> */}
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container
        maxW="container.xl"
        height={{ base: 'auto', lg: '100vh' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={{ base: 4, lg: 6 }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          pt={{ base: '12', lg: '0' }}
        >
          <Stack direction={{ base: 'column', lg: 'column' }}>
            {/* <GoldButton /> */}
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace
                  fontSize={{ base: '24px', lg: '36px' }}
                  fontWeight="bold"
                >
                  All Your Digital Resources
                  <Br />
                  in One Place
                </FallInPlace>
              }
              description={
                <FallInPlace
                  delay={0.4}
                  fontSize={{ base: '12px', lg: '16px' }}
                >
                  Tired of scattered{' '}
                  <Em>links, posts, notes, files and bookmarks?</Em>
                  <Br />
                  Now keep all your digital resources organized and accessible
                  so you can <Em>focus on learning, not searching.</Em>
                </FallInPlace>
              }
            >
              {/* <FallInPlace delay={0.8}> */}
              {/* <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack> */}

              {/* <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup> */}
              {/* </FallInPlace> */}
              <FallInPlace delay={0.8} paddingTop={'40px'}>
                <Box maxW="400px">
                  <WaitlistForm />
                </Box>
              </FallInPlace>
              <FallInPlace
                delay={0.4}
                fontSize={{ base: '10px', lg: '16px' }}
                paddingTop={{ base: '20px', lg: '40px' }}
                color="gray.500"
              >
                Join the waitlist to get early access to Zenboxx. We promise not
                to send you ads. We will write only once when our platform is
                ready.
              </FallInPlace>
            </Hero>
          </Stack>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/* <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow WAI-ARIA standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Compose components to fit your needs and mix them together to create new ones.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Designed to reduce boilerplate and fully typed, build your product at speed.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      /> */}
    </Box>
  )
}

// const HighlightsSection = () => {
//   const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

//   return (
//     <Highlights>
//       <HighlightsItem colSpan={[1, null, 2]} title="Core components">
//         <VStack alignItems="flex-start" spacing="8">
//           <Text color="muted" fontSize="xl">
//             Get started for free with <Em>30+ open source components</Em>.
//             Including authentication screens with Clerk, Supabase and Magic.
//             Fully functional forms with React Hook Form. Data tables with React
//             Table.
//           </Text>

//           <Flex
//             rounded="full"
//             borderWidth="1px"
//             flexDirection="row"
//             alignItems="center"
//             py="1"
//             ps="8"
//             pe="2"
//             bg="primary.900"
//             _dark={{ bg: 'gray.900' }}
//           >
//             <Box>
//               <Text color="yellow.400" display="inline">
//                 yarn add
//               </Text>{' '}
//               <Text color="cyan.300" display="inline">
//                 @saas-ui/react
//               </Text>
//             </Box>
//             <IconButton
//               icon={hasCopied ? <FiCheck /> : <FiCopy />}
//               aria-label="Copy install command"
//               onClick={onCopy}
//               variant="ghost"
//               ms="4"
//               isRound
//               color="white"
//             />
//           </Flex>
//         </VStack>
//       </HighlightsItem>
//       <HighlightsItem title="Solid foundations">
//         <Text color="muted" fontSize="lg">
//           We don&apos;t like to re-invent the wheel, neither should you. We
//           selected the most productive and established tools in the scene and
//           build Saas UI on top of it.
//         </Text>
//       </HighlightsItem>
//       <HighlightsTestimonialItem
//         name="Renata Alink"
//         description="Founder"
//         avatar="/static/images/avatar.jpg"
//         gradient={['pink.200', 'purple.500']}
//       >
//         “Saas UI helped us set up a beautiful modern UI in no time. It saved us
//         hundreds of hours in development time and allowed us to focus on
//         business logic for our specific use-case from the start.”
//       </HighlightsTestimonialItem>
//       <HighlightsItem
//         colSpan={[1, null, 2]}
//         title="Start your next idea two steps ahead"
//       >
//         <Text color="muted" fontSize="lg">
//           We took care of all your basic frontend needs, so you can start
//           building functionality that makes your product unique.
//         </Text>
//         <Wrap mt="8">
//           {[
//             'authentication',
//             'navigation',
//             'crud',
//             'settings',
//             'multi-tenancy',
//             'layouts',
//             'billing',
//             'a11y testing',
//             'server-side rendering',
//             'documentation',
//             'onboarding',
//             'storybooks',
//             'theming',
//             'upselling',
//             'unit testing',
//             'feature flags',
//             'responsiveness',
//           ].map((value) => (
//             <Tag
//               key={value}
//               variant="subtle"
//               colorScheme="purple"
//               rounded="full"
//               px="3"
//             >
//               {value}
//             </Tag>
//           ))}
//         </Wrap>
//       </HighlightsItem>
//     </Highlights>
//   )
// }

// const FeaturesSection = () => {
//   return (
//     <Features
//       id="features"
//       title={
//         <Heading
//           lineHeight="short"
//           fontSize={['2xl', null, '4xl']}
//           textAlign="left"
//           as="p"
//         >
//           Not your standard
//           <Br /> dashboard template.
//         </Heading>
//       }
//       description={
//         <>
//           Saas UI Pro includes everything you need to build modern frontends.
//           <Br />
//           Use it as a template for your next product or foundation for your
//           design system.
//         </>
//       }
//       align="left"
//       columns={[1, 2, 3]}
//       iconSize={4}
//       features={[
//         {
//           title: '#components.',
//           icon: FiBox,
//           description:
//             'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
//           variant: 'inline',
//         },
//         {
//           title: 'Starterkits.',
//           icon: FiLock,
//           description:
//             'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
//           variant: 'inline',
//         },
//         {
//           title: 'Documentation.',
//           icon: FiSearch,
//           description:
//             'Extensively documented, including storybooks, best practices, use-cases and examples.',
//           variant: 'inline',
//         },
//         {
//           title: 'Onboarding.',
//           icon: FiUserPlus,
//           description:
//             'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
//           variant: 'inline',
//         },
//         {
//           title: 'Feature flags.',
//           icon: FiFlag,
//           description:
//             "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
//           variant: 'inline',
//         },
//         {
//           title: 'Upselling.',
//           icon: FiTrendingUp,
//           description:
//             '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
//           variant: 'inline',
//         },
//         {
//           title: 'Themes.',
//           icon: FiToggleLeft,
//           description:
//             'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
//           variant: 'inline',
//         },
//         {
//           title: 'Generators.',
//           icon: FiTerminal,
//           description:
//             'Extend your design system while maintaininig code quality and consistency with built-in generators.',
//           variant: 'inline',
//         },
//         {
//           title: 'Monorepo.',
//           icon: FiCode,
//           description: (
//             <>
//               All code is available as packages in a high-performance{' '}
//               <Link href="https://turborepo.com">Turborepo</Link>, you have full
//               control to modify and adjust it to your workflow.
//             </>
//           ),
//           variant: 'inline',
//         },
//       ]}
//     />
//   )
// }

// const TestimonialsSection = () => {
//   const columns = React.useMemo(() => {
//     return testimonials.items.reduce<Array<typeof testimonials.items>>(
//       (columns, t, i) => {
//         columns[i % 3].push(t)

//         return columns
//       },
//       [[], [], []],
//     )
//   }, [])

//   return (
//     <Testimonials
//       title={testimonials.title}
//       columns={[1, 2, 3]}
//       innerWidth="container.xl"
//     >
//       <>
//         {columns.map((column, i) => (
//           <Stack key={i} spacing="8">
//             {column.map((t, i) => (
//               <Testimonial key={i} {...t} />
//             ))}
//           </Stack>
//         ))}
//       </>
//     </Testimonials>
//   )
// }

// const PricingSection = () => {
//   return (
//     <Pricing {...pricing}>
//       <Text p="8" textAlign="center" color="muted">
//         VAT may be applicable depending on your location.
//       </Text>
//     </Pricing>
//   )
// }

// const FaqSection = () => {
//   return <Faq {...faq} />
// }

export default Home
