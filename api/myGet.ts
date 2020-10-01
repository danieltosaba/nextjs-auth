import fetch from "isomorphic-unfetch";
import { NextPageContext } from "next";
import Router from "next/router";

export async function myGet(url: string, ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie;
    const response = await fetch(url, {
      headers: {
        cookie: cookie!,
      },
    });
  
    if (response.status === 401 && !ctx.req) {
      Router.replace("/login");
      return {};
    }
    if (response.status === 401 && ctx.req) {
      ctx.res?.writeHead(302, {
        Location: "http://localhost:3000/login",
      });
      ctx.res?.end();
      return;
    }
  
    const json = await response.json();
    return json;
  }