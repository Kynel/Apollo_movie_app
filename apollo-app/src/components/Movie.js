import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client';

const TOGGLE_LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  border-radius: 7px;
  width: 10vw;
  height: 15vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 7px;
`;

const Movie = ({ id, bg, isLiked }) => {
  const [toggleMovie] = useMutation(TOGGLE_LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked: isLiked },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};

export default Movie;
