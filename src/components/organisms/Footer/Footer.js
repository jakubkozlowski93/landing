import React from 'react'
import styled from 'styled-components'
import SocialIcons from './../../molecules/SocialIcons/SocialIcons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledCopyright = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
`

const BackToTopWrapper = styled.div`
  margin-top: 20px;
  cursor: pointer;
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 3)
  }

  return (
    <Wrapper>
      <SocialIcons />
      <StyledCopyright>@2022 Jan Kowalski All Rights Reserved.</StyledCopyright>

      <BackToTopWrapper onClick={scrollToTop}>
        <svg width="158" height="53" viewBox="0 0 158 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.072 38.8317C20.672 39.0217 21.142 39.3417 21.482 39.7917C21.822 40.2317 21.992 40.7767 21.992 41.4267C21.992 42.3467 21.632 43.0567 20.912 43.5567C20.202 44.0467 19.162 44.2917 17.792 44.2917H12.362V33.7917H17.492C18.772 33.7917 19.752 34.0367 20.432 34.5267C21.122 35.0167 21.467 35.6817 21.467 36.5217C21.467 37.0317 21.342 37.4867 21.092 37.8867C20.852 38.2867 20.512 38.6017 20.072 38.8317ZM14.777 35.6217V38.0967H17.192C17.792 38.0967 18.247 37.9917 18.557 37.7817C18.867 37.5717 19.022 37.2617 19.022 36.8517C19.022 36.4417 18.867 36.1367 18.557 35.9367C18.247 35.7267 17.792 35.6217 17.192 35.6217H14.777ZM17.612 42.4617C18.252 42.4617 18.732 42.3567 19.052 42.1467C19.382 41.9367 19.547 41.6117 19.547 41.1717C19.547 40.3017 18.902 39.8667 17.612 39.8667H14.777V42.4617H17.612ZM33.5275 42.0417H28.6525L27.7225 44.2917H25.2325L29.9125 33.7917H32.3125L37.0075 44.2917H34.4575L33.5275 42.0417ZM32.7625 40.1967L31.0975 36.1767L29.4325 40.1967H32.7625ZM45.756 44.4717C44.686 44.4717 43.716 44.2417 42.846 43.7817C41.986 43.3117 41.306 42.6667 40.806 41.8467C40.316 41.0167 40.071 40.0817 40.071 39.0417C40.071 38.0017 40.316 37.0717 40.806 36.2517C41.306 35.4217 41.986 34.7767 42.846 34.3167C43.716 33.8467 44.691 33.6117 45.771 33.6117C46.681 33.6117 47.501 33.7717 48.231 34.0917C48.971 34.4117 49.591 34.8717 50.091 35.4717L48.531 36.9117C47.821 36.0917 46.941 35.6817 45.891 35.6817C45.241 35.6817 44.661 35.8267 44.151 36.1167C43.641 36.3967 43.241 36.7917 42.951 37.3017C42.671 37.8117 42.531 38.3917 42.531 39.0417C42.531 39.6917 42.671 40.2717 42.951 40.7817C43.241 41.2917 43.641 41.6917 44.151 41.9817C44.661 42.2617 45.241 42.4017 45.891 42.4017C46.941 42.4017 47.821 41.9867 48.531 41.1567L50.091 42.5967C49.591 43.2067 48.971 43.6717 48.231 43.9917C47.491 44.3117 46.666 44.4717 45.756 44.4717ZM58.3377 40.1667L56.9277 41.6367V44.2917H54.5127V33.7917H56.9277V38.6967L61.5777 33.7917H64.2777L59.9277 38.4717L64.5327 44.2917H61.6977L58.3377 40.1667ZM77.6007 35.7717H74.2407V33.7917H83.3907V35.7717H80.0307V44.2917H77.6007V35.7717ZM92.4173 44.4717C91.3273 44.4717 90.3423 44.2367 89.4623 43.7667C88.5923 43.2967 87.9073 42.6517 87.4073 41.8317C86.9173 41.0017 86.6723 40.0717 86.6723 39.0417C86.6723 38.0117 86.9173 37.0867 87.4073 36.2667C87.9073 35.4367 88.5923 34.7867 89.4623 34.3167C90.3423 33.8467 91.3273 33.6117 92.4173 33.6117C93.5073 33.6117 94.4873 33.8467 95.3573 34.3167C96.2273 34.7867 96.9123 35.4367 97.4123 36.2667C97.9123 37.0867 98.1623 38.0117 98.1623 39.0417C98.1623 40.0717 97.9123 41.0017 97.4123 41.8317C96.9123 42.6517 96.2273 43.2967 95.3573 43.7667C94.4873 44.2367 93.5073 44.4717 92.4173 44.4717ZM92.4173 42.4017C93.0373 42.4017 93.5973 42.2617 94.0973 41.9817C94.5973 41.6917 94.9873 41.2917 95.2673 40.7817C95.5573 40.2717 95.7023 39.6917 95.7023 39.0417C95.7023 38.3917 95.5573 37.8117 95.2673 37.3017C94.9873 36.7917 94.5973 36.3967 94.0973 36.1167C93.5973 35.8267 93.0373 35.6817 92.4173 35.6817C91.7973 35.6817 91.2373 35.8267 90.7373 36.1167C90.2373 36.3967 89.8423 36.7917 89.5523 37.3017C89.2723 37.8117 89.1323 38.3917 89.1323 39.0417C89.1323 39.6917 89.2723 40.2717 89.5523 40.7817C89.8423 41.2917 90.2373 41.6917 90.7373 41.9817C91.2373 42.2617 91.7973 42.4017 92.4173 42.4017ZM111.973 35.7717H108.613V33.7917H117.763V35.7717H114.403V44.2917H111.973V35.7717ZM126.79 44.4717C125.7 44.4717 124.715 44.2367 123.835 43.7667C122.965 43.2967 122.28 42.6517 121.78 41.8317C121.29 41.0017 121.045 40.0717 121.045 39.0417C121.045 38.0117 121.29 37.0867 121.78 36.2667C122.28 35.4367 122.965 34.7867 123.835 34.3167C124.715 33.8467 125.7 33.6117 126.79 33.6117C127.88 33.6117 128.86 33.8467 129.73 34.3167C130.6 34.7867 131.285 35.4367 131.785 36.2667C132.285 37.0867 132.535 38.0117 132.535 39.0417C132.535 40.0717 132.285 41.0017 131.785 41.8317C131.285 42.6517 130.6 43.2967 129.73 43.7667C128.86 44.2367 127.88 44.4717 126.79 44.4717ZM126.79 42.4017C127.41 42.4017 127.97 42.2617 128.47 41.9817C128.97 41.6917 129.36 41.2917 129.64 40.7817C129.93 40.2717 130.075 39.6917 130.075 39.0417C130.075 38.3917 129.93 37.8117 129.64 37.3017C129.36 36.7917 128.97 36.3967 128.47 36.1167C127.97 35.8267 127.41 35.6817 126.79 35.6817C126.17 35.6817 125.61 35.8267 125.11 36.1167C124.61 36.3967 124.215 36.7917 123.925 37.3017C123.645 37.8117 123.505 38.3917 123.505 39.0417C123.505 39.6917 123.645 40.2717 123.925 40.7817C124.215 41.2917 124.61 41.6917 125.11 41.9817C125.61 42.2617 126.17 42.4017 126.79 42.4017ZM141.687 33.7917C142.617 33.7917 143.422 33.9467 144.102 34.2567C144.792 34.5667 145.322 35.0067 145.692 35.5767C146.062 36.1467 146.247 36.8217 146.247 37.6017C146.247 38.3717 146.062 39.0467 145.692 39.6267C145.322 40.1967 144.792 40.6367 144.102 40.9467C143.422 41.2467 142.617 41.3967 141.687 41.3967H139.572V44.2917H137.142V33.7917H141.687ZM141.552 39.4167C142.282 39.4167 142.837 39.2617 143.217 38.9517C143.597 38.6317 143.787 38.1817 143.787 37.6017C143.787 37.0117 143.597 36.5617 143.217 36.2517C142.837 35.9317 142.282 35.7717 141.552 35.7717H139.572V39.4167H141.552Z"
            fill="black"
          />
          <g clipPath="url(#clip0_40_410)">
            <path d="M74.9029 5.86597V8.97144L78.5798 5.52092L82.2566 8.97144V5.86597L78.5798 2.41545L74.9029 5.86597Z" fill="black" />
            <path d="M74.9029 10.6965V13.802L78.5798 10.3515L82.2566 13.802V10.6965L78.5798 7.24601L74.9029 10.6965Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_40_410">
              <rect width="16.5625" height="12.6064" fill="white" transform="translate(72.2766 16.5625) rotate(-90)" />
            </clipPath>
          </defs>
        </svg>
      </BackToTopWrapper>
    </Wrapper>
  )
}

export default Footer
