Dashi-No-Moto
=============

Dashboard framework

## Principles ##

### UI Layer ###

- Progressive enhancement for javascript
- Semantically structured html with special attention to element order in relation to element content or contextual  importance

### Server Layer ###

- API routes have option return HTML using same templates as page rendering (to avoid need to run complex JSON into templates to produce a HTML string for insertion) and/or relevant data in JSON format
- HTML routes should be supported for all actions so that progressive enhancement principles can be maintained