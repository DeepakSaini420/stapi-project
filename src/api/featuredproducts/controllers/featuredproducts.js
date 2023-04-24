'use strict';

module.exports = {
  async index(ctx, next) {
    const entries = await strapi.entityService.findMany('api::product.product')
    ctx.body = entries;
  }
};