import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    pictures: [],
  };

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1, pictures: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  updatePictures = pictures => {
    this.setState(prevState => ({
      pictures: [...prevState.pictures, ...pictures],
    }));
  };

  render() {
    const { query, page, pictures } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={query}
          page={page}
          pictures={pictures}
          loadMore={this.loadMore}
          updatePictures={this.updatePictures}
        />
        <Toaster />
      </div>
    );
  }
}
