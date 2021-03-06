const assert = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#favorite-restaurant');
  I.see('You dont have any favorite Restaurant', '#favorite-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(2);

  I.seeElement('.list-restaurant');
  const firstCard = locate('.restaurant-card').first();
  const contentContainer = firstCard.find('.restaurant-description');
  const restaurantDescription = await I.grabTextFrom(contentContainer);

  const cardLink = firstCard.find('a');
  I.click(cardLink);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);

  I.amOnPage('/#/favorite');
  const restaurantLikedDescription = await I.grabTextFrom(contentContainer);

  assert.strictEqual(restaurantDescription, restaurantLikedDescription);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(2);

  // like restaurant fisrt
  const firstCard = locate('.restaurant-card').first();
  const cardLink = firstCard.find('a');
  I.click(cardLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  //unline restaurant
  I.amOnPage('/#/favorite');
  I.wait(2);
  const firstLikedCard = locate('.restaurant-card').first();
  const cardLikedLink = firstLikedCard.find('a');
  I.click(cardLikedLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // check if favorite page is empty
  I.amOnPage('/#/favorite');
  I.wait(2);
  I.see('You dont have any favorite Restaurant', '#favorite-restaurant');



});
