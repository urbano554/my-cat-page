import React, {Dispatch, useState} from 'react';
import {
  Box,
  Image,
  useToast,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import {DeleteIcon, DownloadIcon, StarIcon} from '@chakra-ui/icons';
import {AddFavorites, deleteFavorites} from '../Services/favorites';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {routes} from '../Pages/Routes';
import {
  CAT_CARD_DIALOGS,
  CAT_CARD_DIALOGS_TOOLTIP,
  COLORS,
} from '../Common/constants';
import DetailCat from './DetailCat';
import {downloadImage} from '../Utils';
import ShareIcon from '../Icons/ShareIcon';
import {Share} from './Share';

type Props = {
  isFetching?: boolean;
  setDisableRefetching?: Dispatch<boolean> | undefined;
  url?: string;
  id?: string;
  newId?: string | number;
};

export const CatCard: React.FC<Props> = ({
  url = '',
  id = '',
  newId,
  setDisableRefetching = () => {},
}) => {
  const CURRENT_PATHNAME = window.location.pathname;

  const toast = useToast();
  const queryClient = useQueryClient();

  const [isNotFavorited, setIsNotFavorited] = useState(true);

  //@ts-ignore
  const addCatMutation = useMutation(AddFavorites, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['cats']);
      toast({
        title: isNotFavorited
          ? CAT_CARD_DIALOGS.favoriteSuccess
          : CAT_CARD_DIALOGS.favoriteDuplicated,
        description: CAT_CARD_DIALOGS.favoriteDescription,
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast({
        title: CAT_CARD_DIALOGS.favoriteError,
        description: CAT_CARD_DIALOGS.favoriteDescription,
        status: 'error',
        duration: 6000,
        isClosable: true,
      });
    },
  });

  //@ts-ignore
  const deleteCatMutation = useMutation(deleteFavorites, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['favoritesCats']);
      console.log(data);
      toast({
        title: CAT_CARD_DIALOGS.deleteSuccess,
        description: CAT_CARD_DIALOGS.deleteDescription,
        status: 'success',
        duration: 6000,
        isClosable: true,
      });

      setDisableRefetching(false);
    },
    onError: () => {
      toast({
        title: CAT_CARD_DIALOGS.deleteError,
        description: CAT_CARD_DIALOGS.deleteDescription,
        status: 'error',
        duration: 6000,
        isClosable: true,
      });
    },
  });

  const handleAddToFavorites = async () => {
    addCatMutation.mutate({catId: id});

    setIsNotFavorited(false);
  };

  const handleDelete = () => {
    deleteCatMutation.mutate({catId: id});

    setDisableRefetching(true);
  };

  const {isOpen, onOpen, onClose} = useDisclosure();
  const {
    isOpen: shareIsOpen,
    onOpen: shareOnOpen,
    onClose: shareOnClose,
  } = useDisclosure();

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalHeader>Detalles</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DetailCat
              detailId={CURRENT_PATHNAME === routes.home ? id : newId}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Share
        url={url}
        shareIsOpen={shareIsOpen}
        shareOnOpen={shareOnOpen}
        shareOnClose={shareOnClose}
      />
      <Box maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image
          src={url}
          alt='cat'
          width='100%'
          height={200}
          cursor='pointer'
          onClick={() => {
            onOpen();
          }}
        />

        <Box display='flex' justifyContent='center' padding={2} gap={8}>
          <Tooltip
            label={
              isNotFavorited
                ? CAT_CARD_DIALOGS_TOOLTIP.favorite
                : CAT_CARD_DIALOGS_TOOLTIP.favoriteDuplicated
            }
          >
            <StarIcon
              display={CURRENT_PATHNAME === routes.favorites ? 'none' : ''}
              onClick={handleAddToFavorites}
              cursor='pointer'
              color={isNotFavorited ? '' : COLORS.yellow}
            />
          </Tooltip>
          <Tooltip label={CAT_CARD_DIALOGS_TOOLTIP.download}>
            <DownloadIcon
              onClick={() => downloadImage(url, id)}
              cursor='pointer'
            />
          </Tooltip>
          <Tooltip label={CAT_CARD_DIALOGS_TOOLTIP.delete}>
            <DeleteIcon
              display={CURRENT_PATHNAME === routes.home ? 'none' : ''}
              onClick={handleDelete}
              cursor='pointer'
            />
          </Tooltip>
          <Tooltip label={CAT_CARD_DIALOGS_TOOLTIP.share}>
            <Icon onClick={() => shareOnOpen()} cursor='pointer'>
              <ShareIcon />
            </Icon>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};
