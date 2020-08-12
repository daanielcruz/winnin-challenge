import React from 'react';

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
  hoursAgo: string;
  author: string;
  url: string;
  thumbnail_height: number;
  id: string;
}

interface iProps {
  post: iPost;
}
const PostBox: React.FC<iProps> = ({ post }) => {
  return (
    <PostContainer>
      <Thumbnail
        src={post.thumbnail_height ? post.thumbnail : noThumb}
        alt=""
      />
      <InfoBox>
        <Title>{post.title}</Title>

        <PostInfo>
          enviado a x horas <strong>por</strong>
          <span> {post.author}</span>
        </PostInfo>

        <PostUrl href={post.url} target="_blank" rel="noopener noreferrer">
          reddit.com
        </PostUrl>
      </InfoBox>
    </PostContainer>
  );
};

export default PostBox;
