import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import noThumb from '../../assets/nothumb.jpg';

import {
  PostContainer,
  Thumbnail,
  InfoBox,
  Title,
  PostInfo,
  PostUrl,
} from './styles';

interface iPost {
  thumbnail: string;
  title: string;
  created_utc: number;
  author: string;
  url: string;
  thumbnail_height: number;
  id: string;
}

interface iProps {
  post: iPost;
}

const PostBox: React.FC<iProps> = ({ post }) => {
  const dateFromTimestamp = new Date(post.created_utc * 1000);
  const momentsAgo = moment(dateFromTimestamp).locale('pt-br').fromNow();

  function catchDomainFromUrl(url: string) {
    const regExp = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
    const match = url.match(regExp);
    if (match !== null) return match[1];
  }

  return (
    <PostContainer>
      <Thumbnail
        src={post.thumbnail_height ? post.thumbnail : noThumb}
        alt=""
      />
      <InfoBox>
        <Title>{post.title}</Title>

        <PostInfo>
          enviado {momentsAgo} <strong>por</strong>
          <span> {post.author}</span>
        </PostInfo>

        <PostUrl href={post.url} target="_blank" rel="noopener noreferrer">
          {catchDomainFromUrl(post.url)}
        </PostUrl>
      </InfoBox>
    </PostContainer>
  );
};

export default PostBox;
