import React, { useEffect, useState } from 'react';

import {
  Container,
  Header,
  LogoBox,
  Main,
  ButtonsBox,
  ViewMore,
  Loading,
  LoadingContainer,
  Button,
} from './styles';

import api from '../../api';
import PostBox from '../../components/PostBox';

interface iPost {
  thumbnail: string;
  title: string;
  created: string;
  author: string;
  url: string;
  thumbnail_height: number;
  id: string;
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState('hot');
  const [currentList, setCurrentList] = useState<iPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [after, setAfter] = useState('');
  const [afterLoading, setAfterLoding] = useState(false);

  useEffect(() => {
    async function getDataAsync() {
      setLoading(true);
      try {
        const { data: response } = await api.get(currentPage, {
          params: {
            limit: 8,
          },
        });
        setCurrentList(response.data.children);
        setAfter(response.data.after);
        setLoading(false);
      } catch (e) {
        alert("something's wrong!");
      }
    }
    getDataAsync();
  }, [currentPage]);

  async function viewMoreAsync() {
    setAfterLoding(true);
    try {
      const { data: response } = await api.get(currentPage, {
        params: {
          limit: 10,
          after,
        },
      });
      setCurrentList((state: iPost[]) => [...state, ...response.data.children]);
      setAfter(response.data.after);
      setAfterLoding(false);
    } catch (e) {
      alert("something's wrong!");
    }
  }

  function handleSetCurrentPage(page: string) {
    setCurrentPage(page);
  }

  return (
    <Container>
      <Header>
        <LogoBox>
          REACT<span>JS</span>
        </LogoBox>
      </Header>
      <Main>
        <ButtonsBox>
          <Button
            currentPage={currentPage}
            onClick={() => handleSetCurrentPage('hot')}
          >
            HOT
          </Button>
          <Button
            currentPage={currentPage === 'new' ? 'news' : 'other'}
            onClick={() => handleSetCurrentPage('new')}
          >
            NEWS
          </Button>
          <Button
            currentPage={currentPage}
            onClick={() => handleSetCurrentPage('rising')}
          >
            RISING
          </Button>
        </ButtonsBox>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          currentList.map((item: any) => {
            return <PostBox post={item.data} key={item.data.id} />;
          })
        )}

        {afterLoading && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}

        <div style={{ display: 'flex', flex: 1 }}>
          <ViewMore onClick={viewMoreAsync}>+ Ver mais</ViewMore>
        </div>
      </Main>
    </Container>
  );
};

export default Home;
