import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Box,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import {SHARE_SOCIAL_LINKS} from '../Common/constants';
import FacebookIcon from '../Icons/FacebookIcon';
import WhatsappIcon from '../Icons/WhatsappIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import PinteresIcon from '../Icons/PinteresIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';

type ShareProps = {
  url?: string;
  shareIsOpen: boolean;
  shareOnOpen: () => void;
  shareOnClose: () => void;
};

export const Share: React.FC<ShareProps> = ({
  url,
  shareIsOpen,
  shareOnClose,
}) => {

  console.log(url)

  return (
    <Drawer isOpen={shareIsOpen} placement='bottom' onClose={shareOnClose}>
      <DrawerOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <SimpleGrid
            columns={5}
            width={{sm: '100%', lg: '50%', xl: '50%'}}
            margin='0 auto'
          >
            <Link target='_blank' href={`${SHARE_SOCIAL_LINKS.facebook}${url}`}>
              <Box width='0' cursor='pointer'>
                <FacebookIcon />
              </Box>
            </Link>
            <Box width='0' cursor='pointer'>
              <Link
                target='_blank'
                href={`${SHARE_SOCIAL_LINKS.twitter}${url}`}
              >
                <TwitterIcon />
              </Link>
            </Box>
            <Box width='0' cursor='pointer'>
              <Link
                target='_blank'
                href={`${SHARE_SOCIAL_LINKS.whatsapp}${url}`}
              >
                <WhatsappIcon />
              </Link>
            </Box>
            <Box width='0' cursor='pointer'>
              <Link
                target='_blank'
                href={`${SHARE_SOCIAL_LINKS.pinterest}${url}&media=${url}&description=${url}`}
              >
                <PinteresIcon />
              </Link>
            </Box>
            <Box width='0' cursor='pointer'>
              <Link
                target='_blank'
                href={`${SHARE_SOCIAL_LINKS.linkedin}${url}`}
              >
                <LinkedinIcon />
              </Link>
            </Box>
          </SimpleGrid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
