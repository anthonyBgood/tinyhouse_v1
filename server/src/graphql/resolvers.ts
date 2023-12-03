
//import { IResolvers } from "graphql-tools";
import { listings } from "../listings";


export const resolvers = {

    Query:{
        listings: () => {
            return listings;
        }
    },

    Mutation: {
        deleteListing: (_root: undefined, { id }:{id:String}) => {

            for (let i = 0; i < listings.length; i++){
                if (listings[i].id === id){
                    return listings.splice(i,1)[0];
                }
            }
            throw new Error("failed to delete listing")
        }
    }

}