import {HomepageHelper} from "../helpers/homepage-helper";

beforeEach(() => {
  // root-level hook
  // runs before every test block
  cy.visit(Cypress.env(`envLink`))
})

import {homepage} from "../page-objects/LaravelAppHomepage/homepage-elements";

describe('Check link containers on homepage', () => {
    const homepageHelper = new HomepageHelper()

    it('Check Documentation link container content', () => {
        cy.get(homepage.documentation.container).should(`have.attr`, `href`, homepage.documentation.url)
        cy.get(homepage.documentation.container).within(() => {
            cy.get(homepage.documentation.iconSVG).should(`be.visible`)
            cy.get(homepage.documentation.iconSVG).should(`have.attr`, `xmlns`, homepage.documentation.iconSVGURL)
            cy.get(homepage.documentation.heading).should(`contain.text`, homepage.documentation.headingText)
            cy.get(homepage.documentation.heading).should(`be.visible`)
            cy.get(homepage.documentation.paragraph).should(`contain.text`, homepage.documentation.paragraphText)
            cy.get(homepage.documentation.paragraph).should(`be.visible`)
            cy.get(homepage.documentation.arrowSVG).should(`be.visible`)
            cy.get(homepage.documentation.arrowSVG).should(`have.attr`, `xmlns`, homepage.documentation.arrowSVGURL)
        })
    })

    it('Check Documentation link', () => {
        cy.get(homepage.documentation.container).click().then(() => {
            cy.wait(1000)
            cy.url().should(`include`, homepage.documentation.url)
            cy.get(homepage.laravelLogotype).should(`be.visible`)
        })
    })

    it('Check Laracast link container content', () => {
        cy.get(homepage.laracast.container).should(`have.attr`, `href`, homepage.laracast.url)
        cy.get(homepage.laracast.container).within(() => {
            cy.get(homepage.laracast.iconSVG).should(`be.visible`)
            cy.get(homepage.laracast.iconSVG).should(`have.attr`, `xmlns`, homepage.laracast.iconSVGURL)
            cy.get(homepage.laracast.heading).should(`contain.text`, homepage.laracast.headingText)
            cy.get(homepage.laracast.heading).should(`be.visible`)
            cy.get(homepage.laracast.paragraph).should(`contain.text`, homepage.laracast.paragraphText)
            cy.get(homepage.laracast.paragraph).should(`be.visible`)
            cy.get(homepage.laracast.arrowSVG).should(`be.visible`)
            cy.get(homepage.laracast.arrowSVG).should(`have.attr`, `xmlns`, homepage.laracast.arrowSVGURL)
        })
    })

    it('Check Laracast link', () => {
        cy.get(homepage.laracast.container).click().then(() => {
            cy.wait(1000)
            cy.url().should(`include`, homepage.laracast.url)
            cy.get(homepage.laracastLogotype).should(`be.visible`)
        })
    })

    it('Check Laravel News link container content', () => {
        cy.get(homepage.news.container).should(`have.attr`, `href`, homepage.news.url)
        cy.get(homepage.news.container).within(() => {
            cy.get(homepage.news.iconSVG).should(`be.visible`)
            cy.get(homepage.news.iconSVG).should(`have.attr`, `xmlns`, homepage.news.iconSVGURL)
            cy.get(homepage.news.heading).should(`contain.text`, homepage.news.headingText)
            cy.get(homepage.news.heading).should(`be.visible`)
            cy.get(homepage.news.paragraph).should(`contain.text`, homepage.news.paragraphText)
            cy.get(homepage.news.paragraph).should(`be.visible`)
            cy.get(homepage.news.arrowSVG).should(`be.visible`)
            cy.get(homepage.news.arrowSVG).should(`have.attr`, `xmlns`, homepage.news.arrowSVGURL)
        })
    })

    it('Check Laravel News link', () => {
        cy.get(homepage.news.container).click().then(() => {
            cy.wait(1000)
            cy.url().should(`include`, homepage.news.url)
            cy.get(homepage.laravelNews).children(`p`).should(`be.visible`)
        })
    })

    it('Check ecosystem container content', () => {
        cy.get(homepage.ecosystem.container).within(() => {
            cy.get(homepage.ecosystem.iconSVG).should(`be.visible`)
            cy.get(homepage.ecosystem.iconSVG).should(`have.attr`, `xmlns`, homepage.ecosystem.iconSVGURL)
            cy.get(homepage.ecosystem.heading).should(`contain.text`, homepage.ecosystem.headingText)
            cy.get(homepage.ecosystem.heading).should(`be.visible`)
            cy.get(homepage.ecosystem.paragraph).should(`contain.text`, homepage.ecosystem.paragraphText)
            cy.get(homepage.ecosystem.paragraph).should(`be.visible`)
            cy.get(homepage.ecosystem.arrowSVG).should(`be.visible`)
            cy.get(homepage.ecosystem.arrowSVG).should(`have.attr`, `xmlns`, homepage.ecosystem.arrowSVGURL)
        })
    })

    it('Check sponsor link', () => {
        cy.get(homepage.sponsor.container).should(`contain.text`, homepage.sponsor.text)
        cy.get(homepage.sponsor.container).within(() => {
            cy.get(homepage.sponsor.iconSVG).should(`be.visible`)
        }).then(() => {
            cy.get(homepage.sponsor.container).click().then(() => {
                cy.wait(1000)
                cy.url().should(`include`, homepage.sponsor.url)
                cy.get(homepage.gitHubLogo).should(`be.visible`)
            })
        })
    })

    // it('Homepage background color check', () => {
    //     cy.get('.bg-gray-100').invoke(`attr`, `background-color`).then((val) => cy.log(`value`, val))
    // })

    it('Homepage logotype check', () => {
        cy.get('[class="h-16 w-auto bg-gray-100 dark:bg-gray-900"]').should(`be.visible`)
    })

    it('Homepage Log in container check', () => {
        cy.get(homepage.logIn.container).should(`be.visible`)
        cy.get(homepage.logIn.container).should(`contain.text`, homepage.logIn.text)
    })
    it('Homepage Register container check', () => {
        cy.get(homepage.register.container).should(`be.visible`)
        cy.get(homepage.register.container).should(`contain.text`, homepage.register.text)
    })

    it('Register page check', () => {
        cy.get(homepage.register.container).click().then(() => {
            cy.get(`input[id="name"]`).should(`be.visible`)
            cy.get(`label[for="name"]`).should(`be.visible`)
            cy.get(`input[id="email"]`).should(`be.visible`)
            cy.get(`label[for="email"]`).should(`be.visible`)
            cy.get(`input[id="password"]`).should(`be.visible`)
            cy.get(`label[for="password"]`).should(`be.visible`)
            cy.get(`input[id="password_confirmation"]`).should(`be.visible`)
            cy.get(`label[for="password_confirmation"]`).should(`be.visible`)
            cy.contains(` Already registered? `).should(`be.visible`)
            cy.contains(` Already registered? `).should(`have.attr`, `href`, `${Cypress.env(`envLink`)}/login`)
            cy.get(`button[type="submit"]`).contains(` Register `).should(`be.visible`)
        })
    })
    it('Register A user', () => {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(homepage.register.container).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        })
    })

    it('Login page check', () => {
        cy.get(homepage.logIn.container).click().then(() => {
            cy.get(`input[id="email"]`).should(`be.visible`)
            cy.get(`label[for="email"]`).should(`be.visible`)
            cy.get(`input[id="password"]`).should(`be.visible`)
            cy.get(`label[for="password"]`).should(`be.visible`)
            cy.contains(` Forgot your password? `).should(`be.visible`)
            cy.contains(` Forgot your password? `).should(`have.attr`, `href`, `${Cypress.env(`envLink`)}/forgot-password`)
            cy.get(`button[type="submit"]`).contains(` Log in `).should(`be.visible`)
        })
    })

    it('Successful Login', () => {
        cy.get(homepage.logIn.container).click().then(() => {
            cy.get(`input[id="email"]`).type(homepage.testUser.email)
            cy.get(`input[id="password"]`).type(homepage.testUser.password)
            cy.get(`button[type="submit"]`).contains(` Log in `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        })
    })

    it('Unsuccessful Login, wrong email and wrong password', () => {
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(homepage.logIn.container).click().then(() => {
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Log in `).click()
        }).then(() => {
            cy.contains(`These credentials do not match our records.`).should(`be.visible`)
        })
    })

    it('Unsuccessful Login, right email and wrong password', () => {
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(homepage.logIn.container).click().then(() => {
            cy.get(`input[id="email"]`).type(homepage.testUser.email)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Log in `).click()
        }).then(() => {
            cy.contains(`These credentials do not match our records.`).should(`be.visible`)
        })
    })
    it('Unsuccessful Login, wrong email and right password', () => {
        const randomEmail = homepageHelper.randomValidEmail()
        cy.get(homepage.logIn.container).click().then(() => {
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(homepage.testUser.password)
            cy.get(`button[type="submit"]`).contains(` Log in `).click()
        }).then(() => {
            cy.contains(`These credentials do not match our records.`).should(`be.visible`)
        })
    })

    it('Profile page check', () => {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(`[href="http://localhost:8080/register"]`).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        }).then(() => {
            cy.get(`span.inline-flex > .inline-flex`).should(`be.visible`)
            cy.get(`span.inline-flex > .inline-flex`).click()
        }).then(() => {
            cy.contains(` Profile `).should(`be.visible`)
            cy.contains(` Profile `).should(`have.attr`, `href`, `${Cypress.env(`envLink`)}/profile`)
            cy.contains(` Log Out `).should(`be.visible`)
        }).then(() => {
            cy.contains(` Profile `).click()
        }).then(() => {
            cy.get(`h2`).contains(`Profile Information`).should(`be.visible`)
            cy.get(`p`).contains(` Update your account's profile information and email address. `).should(`be.visible`)
        }).then(() => {
            cy.get(`input[id="name"]`).should(`be.visible`)
            cy.get(`label[for="name"]`).should(`be.visible`)
            cy.get(`input[id="email"]`).should(`be.visible`)
            cy.get(`label[for="email"]`).should(`be.visible`)
        }).then(() => {
            cy.get(`input[id="name"]`).invoke(`val`).should(`include`, randomName)
            cy.get(`input[id="email"]`).invoke(`val`).should(`include`, randomEmail)
        }).then(() => {
            cy.get(`input[id="current_password"]`).should(`be.visible`)
            cy.get(`label[for="current_password"]`).should(`be.visible`)
            cy.get(`input[id="password"]`).should(`be.visible`)
            cy.get(`label[for="password"]`).should(`be.visible`)
            cy.get(`input[id="password_confirmation"]`).should(`be.visible`)
            cy.get(`label[for="password_confirmation"]`).should(`be.visible`)
        }).then(() => {
            cy.get(`h2`).contains(`Delete Account`).should(`be.visible`)
            cy.get(`p`).contains(` Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. `).should(`be.visible`)
        }).then(() => {
            cy.contains(`Save`).should(`be.visible`)
            cy.contains(`Save`).should(`have.attr`, `type`, `submit`)
            cy.contains(`Delete Account`).should(`be.visible`)
            cy.get(`button`).contains(`Delete Account`).should(`have.attr`, `type`, `submit`)
        })

    })

    it('Profile page - change name', () => {
        const randomName = homepageHelper.randomString(10)
        const randomName2 = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(`[href="http://localhost:8080/register"]`).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        }).then(() => {
            cy.get(`span.inline-flex > .inline-flex`).should(`be.visible`)
            cy.get(`span.inline-flex > .inline-flex`).click()
        }).then(() => {
            cy.contains(` Profile `).click()
        }).then(() => {
            cy.get(`input[id="name"]`).invoke(`val`).should(`include`, randomName)
        }).then(() => {
            cy.get(`input[id="name"]`).clear().then(() => {
                cy.get(`input[id="name"]`).type(randomName2)
            })
        }).then(() => {
            cy.contains(`Save`).eq(0).click()
        }).then(() => {
            cy.get(`input[id="name"]`).invoke(`val`).should(`include`, randomName2)
        })

    })

    it('Profile page - change email', () => {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomEmail2 = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(`[href="http://localhost:8080/register"]`).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        }).then(() => {
            cy.get(`span.inline-flex > .inline-flex`).should(`be.visible`)
            cy.get(`span.inline-flex > .inline-flex`).click()
        }).then(() => {
            cy.contains(` Profile `).click()
        }).then(() => {
            cy.get(`input[id="email"]`).invoke(`val`).should(`include`, randomEmail)
        }).then(() => {
            cy.get(`input[id="email"]`).clear().then(() => {
                cy.get(`input[id="email"]`).type(randomEmail2)
            })
        }).then(() => {
            cy.contains(`Save`).eq(0).click()
        }).then(() => {
            cy.get(`input[id="email"]`).invoke(`val`).should(`include`, randomEmail2)
        })

    })

    it('Profile page - change password', () => {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        const randomPassword2 = homepageHelper.randomValidPassword()
        cy.get(`[href="http://localhost:8080/register"]`).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        }).then(() => {
            cy.get(`span.inline-flex > .inline-flex`).should(`be.visible`)
            cy.get(`span.inline-flex > .inline-flex`).click()
        }).then(() => {
            cy.contains(` Profile `).click()
        }).then(() => {
            cy.get(`input[id="current_password"]`).type(randomPassword)
            cy.get(`input[id="password"]`).type(randomPassword2)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword2)
        }).then(() => {
            cy.get(`button[type="submit"]`).eq(1).click()
        })

    })

    it('Profile page - delete account', () => {
        const randomName = homepageHelper.randomString(10)
        const randomEmail = homepageHelper.randomValidEmail()
        const randomPassword = homepageHelper.randomValidPassword()
        cy.get(`[href="http://localhost:8080/register"]`).click().then(() => {
            cy.get(`input[id="name"]`).type(randomName)
            cy.get(`input[id="email"]`).type(randomEmail)
            cy.get(`input[id="password"]`).type(randomPassword)
            cy.get(`input[id="password_confirmation"]`).type(randomPassword)
            cy.get(`button[type="submit"]`).contains(` Register `).click()
        }).then(() => {
            cy.contains(`You're logged in!`).should(`be.visible`)
        }).then(() => {
            cy.get(`span.inline-flex > .inline-flex`).should(`be.visible`)
            cy.get(`span.inline-flex > .inline-flex`).click()
        }).then(() => {
            cy.contains(` Profile `).click()
        }).then(() => {
            cy.get(`button`).contains(`Delete Account`).click()
        }).then(() => {
            cy.get(`h2`).contains(` Are you sure you want to delete your account? `).should(`be.visible`)
            cy.get(`p`).contains(` Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. `).should(`be.visible`)
        }).then(() => {
            cy.get(`input[id="password"]`).eq(1).type(randomPassword)
        }).then(() => {
            cy.get(`button[type="submit"]`).eq(3).click()
        }).then(() => {
            cy.get(`a[href="https://laravel.com/docs"]`).should(`be.visible`)
        })

    })


})
