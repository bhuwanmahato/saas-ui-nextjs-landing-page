import {
  HTMLChakraProps,
  Stack, // chakra,
  useColorModeValue,
} from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = () => {
  // const color = useColorModeValue('#231f20', '#fff')
  return (
    <Stack direction={'row'} align={'center'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
      >
        <path
          d="M17.3498 1.34994C18.2066 0.855269 19.2622 0.85527 20.119 1.34995L32.9382 8.75113C33.795 9.2458 34.3228 10.16 34.3228 11.1494L34.3228 25.9517C34.3228 26.9411 33.795 27.8553 32.9382 28.3499L20.119 35.7511C19.2622 36.2458 18.2066 36.2458 17.3498 35.7511L4.53053 28.3499C3.67373 27.8553 3.14592 26.9411 3.14592 25.9517L3.14592 11.1494C3.14592 10.16 3.67373 9.2458 4.53053 8.75113L17.3498 1.34994Z"
          fill="url(#paint0_linear_4538_56354)"
        />
        <path
          d="M18.0626 18.0354C18.5028 17.7694 19.0543 17.7694 19.4946 18.0354L32.8553 26.1075C33.7468 26.6461 33.7468 27.9391 32.8553 28.4777L19.4946 36.5498C19.0543 36.8158 18.5028 36.8158 18.0626 36.5498L4.7018 28.4777C3.81032 27.9391 3.81032 26.6461 4.7018 26.1075L18.0626 18.0354Z"
          fill="url(#paint1_linear_4538_56354)"
        />
        <path
          d="M18.0626 12.6894C18.5028 12.4234 19.0543 12.4234 19.4946 12.6894L32.8553 20.7615C33.7468 21.3001 33.7468 22.5932 32.8553 23.1318L19.4946 31.2039C19.0543 31.4699 18.5028 31.4699 18.0626 31.2039L4.7018 23.1318C3.81032 22.5932 3.81032 21.3001 4.7018 20.7615L18.0626 12.6894Z"
          fill="url(#paint2_linear_4538_56354)"
        />
        <path
          d="M17.9998 6.70109C18.4488 6.42047 19.0185 6.42047 19.4675 6.70108L32.8933 15.0922C33.761 15.6345 33.761 16.8982 32.8933 17.4405L19.4675 25.8317C19.0185 26.1123 18.4488 26.1123 17.9998 25.8317L4.57395 17.4405C3.70626 16.8982 3.70626 15.6345 4.57395 15.0922L17.9998 6.70109Z"
          fill="url(#paint3_linear_4538_56354)"
        />
        <path
          d="M18.0176 1.32907C18.4579 1.06307 19.0094 1.06307 19.4496 1.32907L32.8104 9.40119C33.7019 9.93979 33.7019 11.2328 32.8104 11.7714L19.4496 19.8435C19.0094 20.1095 18.4579 20.1095 18.0176 19.8435L4.65688 11.7714C3.7654 11.2328 3.7654 9.93979 4.65688 9.40119L18.0176 1.32907Z"
          fill="url(#paint4_linear_4538_56354)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4538_56354"
            x1="18.7344"
            y1="0.550537"
            x2="18.7344"
            y2="36.5505"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.33" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4538_56354"
            x1="18.7786"
            y1="17.6028"
            x2="18.7786"
            y2="36.9824"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.446428" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_4538_56354"
            x1="18.7786"
            y1="12.2568"
            x2="18.7786"
            y2="31.6365"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.446428" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_4538_56354"
            x1="18.7336"
            y1="6.24243"
            x2="18.7336"
            y2="26.2903"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.446428" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_4538_56354"
            x1="18.7336"
            y1="0.896484"
            x2="18.7336"
            y2="20.2761"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.446428" stop-color="white" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="21"
        viewBox="0 0 110 21"
        fill="none"
      >
        <path
          d="M0.410156 20.5197V19.9271L11.9657 1.38388H4.31139L1.76818 6.32215H1.12621L1.7188 0.766602H15.299V1.38388L3.7188 19.9271H12.3608L14.904 14.6185H15.546L14.9534 20.5197H0.410156Z"
          fill="#EAECF0"
        />
        <path
          d="M24.0786 20.7666C22.8604 20.7666 21.7576 20.495 20.7699 19.9518C19.7823 19.3921 19.0004 18.6102 18.4242 17.6061C17.8481 16.602 17.56 15.4415 17.56 14.1246C17.56 12.8077 17.8399 11.6555 18.3995 10.6678C18.9757 9.66372 19.7411 8.89006 20.6958 8.34685C21.667 7.78718 22.7452 7.50734 23.9304 7.50734C24.9674 7.50734 25.8975 7.73779 26.7205 8.1987C27.5436 8.6596 28.1856 9.30158 28.6465 10.1246C29.1074 10.9312 29.346 11.8612 29.3625 12.9147H20.2761V15.3592C20.2761 16.8077 20.5971 17.9847 21.239 18.8901C21.8975 19.7789 22.844 20.2234 24.0786 20.2234C25.2144 20.2234 26.2185 19.9024 27.0909 19.2604C27.9633 18.6184 28.4983 17.7872 28.6958 16.7666H29.2637C29.0333 17.9847 28.4489 18.9559 27.5107 19.6802C26.5724 20.4045 25.4283 20.7666 24.0786 20.7666ZM26.6465 12.2975C26.6465 10.8654 26.4242 9.80364 25.9798 9.11228C25.5353 8.40446 24.844 8.05055 23.9057 8.05055C22.8028 8.05055 21.9469 8.43738 21.3378 9.21104C20.7288 9.98471 20.3831 11.0135 20.3008 12.2975H26.6465Z"
          fill="#EAECF0"
        />
        <path
          d="M31.0056 20.0259L32.734 19.7789V8.4703L31.0056 8.22339V7.72956H35.2032V10.3962C35.8122 9.50734 36.5283 8.80775 37.3513 8.29746C38.1744 7.77071 39.0632 7.50734 40.018 7.50734C41.2032 7.50734 42.1332 7.80364 42.8081 8.39623C43.4995 8.98882 43.8451 9.86948 43.8451 11.0382V19.7789L45.5735 20.0259V20.5197H39.8945V20.0259L41.376 19.7789V11.0876C41.376 10.2316 41.2032 9.57318 40.8575 9.11228C40.5118 8.63491 39.9768 8.39623 39.2525 8.39623C38.4953 8.39623 37.7628 8.67606 37.055 9.23573C36.3637 9.77894 35.7464 10.4538 35.2032 11.2604V19.7789L36.6846 20.0259V20.5197H31.0056V20.0259Z"
          fill="#EAECF0"
        />
        <path
          d="M54.8764 20.7666C53.9052 20.7666 53.0657 20.5197 52.3579 20.0259C51.6665 19.5156 51.1151 18.8242 50.7035 17.9518V20.5197H46.506V20.0259L48.2344 19.7789V1.50734L46.506 1.26043V0.766602H50.7035V10.3222C51.1151 9.44973 51.6665 8.7666 52.3579 8.27277C53.0657 7.76248 53.9052 7.50734 54.8764 7.50734C56.0451 7.50734 57.0739 7.77895 57.9628 8.32215C58.8517 8.86536 59.5431 9.63903 60.0369 10.6431C60.5307 11.6308 60.7776 12.7913 60.7776 14.1246C60.7776 15.458 60.5307 16.6267 60.0369 17.6308C59.5431 18.6184 58.8517 19.3921 57.9628 19.9518C57.0739 20.495 56.0451 20.7666 54.8764 20.7666ZM54.6295 20.1493C56.9175 20.1493 58.0616 18.5526 58.0616 15.3592V12.8901C58.0616 9.7131 56.9175 8.12462 54.6295 8.12462C53.9052 8.12462 53.2468 8.33862 52.6542 8.7666C52.0616 9.17812 51.5924 9.73779 51.2468 10.4456C50.9011 11.137 50.72 11.8942 50.7035 12.7172V15.3592C50.7035 16.1987 50.8682 16.9888 51.1974 17.7296C51.5431 18.4703 52.0122 19.0629 52.6048 19.5073C53.2138 19.9353 53.8887 20.1493 54.6295 20.1493Z"
          fill="#EAECF0"
        />
        <path
          d="M69.2869 20.7666C68.1017 20.7666 67.0235 20.495 66.0523 19.9518C65.0811 19.3921 64.3075 18.6102 63.7313 17.6061C63.1717 16.5855 62.8918 15.425 62.8918 14.1246C62.8918 12.8242 63.1717 11.6719 63.7313 10.6678C64.3075 9.66372 65.0811 8.89006 66.0523 8.34685C67.0235 7.78718 68.1017 7.50734 69.2869 7.50734C70.4721 7.50734 71.5503 7.78718 72.5214 8.34685C73.4926 8.89006 74.2581 9.66372 74.8177 10.6678C75.3939 11.6719 75.6819 12.8242 75.6819 14.1246C75.6819 15.425 75.3939 16.5855 74.8177 17.6061C74.2581 18.6102 73.4926 19.3921 72.5214 19.9518C71.5503 20.495 70.4721 20.7666 69.2869 20.7666ZM69.2869 20.2234C70.505 20.2234 71.4186 19.7789 72.0276 18.8901C72.6531 18.0012 72.9659 16.8242 72.9659 15.3592V12.8901C72.9659 11.425 72.6531 10.2563 72.0276 9.38388C71.4186 8.49499 70.505 8.05055 69.2869 8.05055C68.0688 8.05055 67.147 8.49499 66.5214 9.38388C65.9124 10.2563 65.6079 11.425 65.6079 12.8901V15.3592C65.6079 16.8242 65.9124 18.0012 66.5214 18.8901C67.147 19.7789 68.0688 20.2234 69.2869 20.2234Z"
          fill="#EAECF0"
        />
        <path
          d="M88.725 19.8036L90.3052 20.0259V20.5197H84.2805V20.0259L85.762 19.7789L82.3546 15.1123L78.725 19.458L80.725 20.0259V20.5197H76.3052V20.0259L77.9595 19.4086L81.9595 14.5444L77.5151 8.44561L76.0089 8.22339V7.72956H82.0336V8.22339L80.478 8.49499L83.5645 12.7172L86.8731 8.81598L84.9225 8.24808V7.75425H89.4657V8.24808L87.6632 8.89006L83.9595 13.2851L88.725 19.8036Z"
          fill="#EAECF0"
        />
        <path
          d="M90.2842 20.5197V20.0012L92.7286 18.6184L98.3829 11.0629L92.136 1.65549L90.0373 1.30981V0.766602H97.5187V1.30981L95.5681 1.60611L100.358 8.86536L105.124 2.495L102.185 1.30981V0.766602H108.087V1.30981L105.741 2.61845L100.704 9.35919L107.543 19.6555L109.667 20.0012V20.5197H102.161V20.0012L104.111 19.6802L98.7286 11.5814L93.2718 18.8407L96.1854 20.0012V20.5197H90.2842Z"
          fill="#6590FF"
        />
      </svg>
      <title>ZenboxX</title>
    </Stack>
  )
}
