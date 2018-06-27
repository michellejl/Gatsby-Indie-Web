# How To Use This Template for an Indie Web Starter

Search for various short tutorials on how to make updates to the content of this starter as needed.

_____

# Setting up your h-card:
### Files used:
- Markup: ```src/components/h-card.js```
- Information: ```gatsby-config.js```

### Information built in:
- Name (p-name)
- Job Title (p-job-title)
- Site URL (u-url)
- Image (u-photo) --> Add a image file to ```static/img```
- City (p-locality)
- State (p-region)

### More Information on h-cards:
- [h-card on indieweb.org](https://indieweb.org/h-card)
- [h-card properties on microformats](http://microformats.org/wiki/h-card#Properties)
- See what is being read from your h-card using a [validator](https://indieweb.org/h-card#Validators)

## How to add a new property:
1. Add a new piece of information to ```gatsby-config.js``` under author:
    ```js
    author: {
        email: 'example@example.com'
    }    
    ```
1. **NOTE:** Restart ```gatsby develop``` or you won't be able to find new information from the ```gatsby-config.js``` file.
1. Update query inside of to add email ```src/components/h-card.js```
    ```jsx
        query HCardQuery {
        site {
            siteMetadata {
                author {
                    email
                }
            }
        }
    ```
1. In the same file, update the markup:
    ```jsx
        <Link 
            className='u-email' 
            rel='me'
            to='mailto:'{data.site.siteMetadata.author.siteURL}
        >
            {data.site.siteMetadata.author.email}
        </Link>
    ```

## Remove information you don't want to share:
Follow the above notes, only remove the content / markup instead of adding it in. Make sure to remove from all the locations for best performance. 

_____

# rel='me' / Links around the Interwebs

### More Information on rel='me':
- [rel='me' on indieweb.org](https://indieweb.org/rel-me)
- [How to set up web sign in on your own domain on indieweb.org](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain)

## Add more social / silos / around the web links
1. Add a new piece of information to ```gatsby-config.js``` under author > social. The information in the quotes should be the changable part of the URL after the /
    ```js
      author: {
        social: {
          facebook: 'michelle.jl.98'
        }
      }    
    ```
    
1. **NOTE:** Restart ```gatsby develop``` or you won't be able to find new information from the ```gatsby-config.js``` file.
1. Add a new ```const``` for the link you want to add in ```src/components/h-card.js```
    ```js
      // Base Social URLs
      const facebookURL = 'https://facebook.com/'
    ```
1. Update query inside of to add new socail site in ```src/components/h-card.js```
    ```jsx
      query HCardQuery {
      site {
        siteMetadata {
          author {
            socail {
              facebook
            }
          }
        }
      }
    ```
1. In that same file, update the markup:
    ```
      <li>
        Facebook: 
        <a
            className='u-url'
            rel='me'
            href={facebookURL + data.site.siteMetadata.author.social.facebook}
        >
            @{data.site.siteMetadata.author.social.facebook}
        </a>
      </li>
    ```
**NOTE:** Make sure you also do these things: [How to set up web sign in on your own domain on indieweb.org](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain)