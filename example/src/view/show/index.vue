<template>
  <section class="container">
    <div class="main">

      <div class="header">
        <i class="el-icon-s-tools"></i>
        <span class="t1">Online configuration</span>
        <span class="t2">Preview and generate code</span>
      </div>

      <div class="body">
        <div class="cutter-body">
          <vue-cutter
            ref="cutter"
            :container-bounding="['100%','100%']"
            @preview="preview"
            :crop-info="true"
            :crop-dividing-line="true"
            mode="contain"
            crop-box-bounding="300px 300px"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAhUDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAEDBAUGAgcI/8QAQRAAAgEDAgMGBAMHAgUEAwEAAQIDAAQRBSESMUEGEyJRYXEUgZGhMkKxBxUjUsHR8HLhJDNTYvEWJYKSNENzov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgICAwEBAQEAAAAAAAABAhEDIRIxE0EEIlEyFGFx/9oADAMBAAIRAxEAPwD5/ooooAKKKKYBS0lAoAWiilFMQAUuKBXQoA4opzgpOCmmBxRSlcUlMAooooAUGiiimAlLSUUAOrUmMg1CBxTySYxUyVktFlER51IOOHaq+KSpIk2rBohnEp51FdgKeleobvk1pBAkdrIAalRXIHWq0mlDEHnVuKZTjZoILrw7munl4t6p4JWFSw+RzrFxoadaY8SKciQE71E48HenFmwedJrRDeyxWMKPSmZCFzXUN3wD8rA81YbGlkWO53tm/iHnCx3P+k9fbn71nQ3LWjlHUH3qTGoI4uld3+i31ro9nqXcP3LgqWC8sHIz68x8qr7bUGhkyVVgdmRuTDyoataE7T2WEiqFzVXOBxVMvAY+CSNi9vKOKNz91PqOR+R61XuTSiS7GyQKQMKZdjvTQk3rdRsdFrasNxVrcRd5ZxXS75/hyejDl9R+hrPQykEEGrnTbtWMltK2I514CTyVvyt8j9iaylGmXGSSohTpmq6RMNVlKWBZGBDA4IPQ1FeEsa0g6M3LY3bnhmjPQOP1qaqcEzr5OR96btLUvcxKRsXUfepIBaeRj1Yn70SdjXY+vKl7kOKFOOVPRgbnzrM3WyC1uSdgKaeArzAq/t7XvPy1HvrMoueE0LJuivFqzMznGags3FVjdocnNVxU8VdceiKo5wTXYjPlTscWelTYYOM4xTbom/wrTGR0rgjHOr1rEY2FVtxbFCdqlSTKIdJSkUYqgEooxRQAUtJRQAtFFFABRRRSAKKKKAOaKKKgYUUUUAFLSUtMAooopiFFdg5puugcUUBIRc13wCmlfaujLSommDqMUw1dtJmmyc1SGhKKKKBhRRRQAUUUUAFKKSlpgPo4GKdMvrUPOKXjNS4oVD7PmuSMmmw1OKaOgobK4rmnmIpkmqQIeibepq7qKrVbBqbDJmokvYpI7kzTJkINTkiWTqfYDJpiaK3HMzZ9AKhNdEDQuCOtPWjCa5RCxGeWPOohjgJOLhl/1x/2JqTaWM8sy/D8E+/KJsn/AOvP7VTiimkfU/ZixtL/ALH2Vpf228kI7yN/Fg49a8x7c/seudIt31HQy91bIC0kOMugzzA6j716T2enc6DpkrAoTboCCdwQMVqba8LABjv5+deYsnCTO1w5RVnyfpShy1hctwxXBAVjyjk/K39D6H0pqSzdWeN1KuhKsDzBHMV7j+0H9mkN9FPrWhw8FyAXmtI12lPUqOh8x1rzm8017nTBqrE98pENypG/GOTH3XHzBrfmuzm8L6MPPaNzAqvePhOa1jwkA5TPF4fmap7+z7q+aHdfFg8Yxj3rbHP0RKFK0VYJU48ql2rgyqrnwt4T6Z2qIVK5yNutPiMosZPJ14gfTOP6VrJJozZdXK98Y7jGGkBWQD/qLs312PzNLFbZxkU9B/xGnySkb7SH0dcK31Vlb5GpluoxuRyzXNKVDikFjbKl3G5AwmXPyBP9KgPBw8qvYXjjgupM58AjH/yP9gar5yhlYJ+HO1TGTLaIAQ8jUi3XcZrvAHMDNOxJxHYU2y4qi1sxwJgjn5UXyiSInGa7s4pGHhjYgbFsbD50/JAGVsSRD/5Z/Ssbp2aOdKjFX1rzOKb0zszqOsXYt7G2aWQkYHLmSBv0Gx3PlW70TsnN2hvJYlIWGMZeRdwuf8Nepd1Y6NamDToFiUAR8Q/E+OpPXmfrWz+TwVIUMTyO/R5nF+xuWO2L3OsQJKCMrHGWGOv3qv1f9nOp6DZm5CC6hQ5MkPID1HpXp6SO87F3LEyFvTHLA+WKvtMvkmkeC4CPC4/AR4QPKsXnn7Z1LDGKqj50hVZFIxuCah3lqDnavRv2k9jDoN1++dOXOnXL4dVH/Kc/0NYBpkeDc5Nbxl7RhxS0zM3FvwsSKiFcHerq5UYJqqlXc12QlZi1Q1SUtFWI5opTRSASlopMUALRRRQAUUUUAc0UUVmMKKKBQAtFFFMAoopaYgooopgLk0maKKACiiigAooooAKKKKACiilpgJS0UlABRRRSAK6DYrmigDotmuaKKYBTkblTTfM4FFIC2gkHDmnJboSDE0ayDz5N9f75qtikIFOF81lw2RR21tBNkxXARv5Jts+zDb64py20+4juI2kVoxxDhk5g+xG1RWUkbDI9KnaVeS2c4aJyAea52PuORq22kJvR9PdnONuzFiZyJHEYBPU7edXEWVXKsWX15iqbsrcQ3HZOzkRFiBQeEDYH5VbxMwcDGD0PQ14s/wCmeriVwRZW93sBxb+XnUTVezWn6tBckRLHLcJwu6Dckcm9x/WuhbhzxKOFuZA8/MVPh4o364I5VUX6ZMl7R4n2g7C3NlbXXcRmS6TBTCkAoNtvWspH2S1LVpo3aFlnmHEC+2Mbb/avp2VUdfEB86rGhtLZxII0ViSM486vyygTwjP0fLN/2XuEi0pYiWlvyMpw7o+cYJ+9Tr/sje2S29pMrl/hzPGSm2MklB64Ga9/ey0y6vbe9eNQ0LMy8gACdyfnUC5mTU7xoYFWIQsGeVxnG5AA9SAT7Vp/rk10T/kieM6Bod3LdSWkUDyrMCqnhI5grn6Nn5U5/wCmdWt4U4oCZJWMahR5HBxn6V6/pWnw2GuS2Voq5jYtLLw7gHkg+5qL2o7R6ToSBWjF1cLGVVAeQGSR6DYnPpS87ctIa+LFHlB02+GmxxqhMsszEpjkFAA/U1GSzuJbyGBY+IthQVHMnr+v0r0Kz1a/1XUf3elilt/wyuSF3SQ78/nitp2e7NJp8by3KxSzsx34R4RyH2olma00P/NGrs8pk7KTxRQtMjKzIdgudgef0PM4FPW2nWyBGgijyw4i8p4zj0zsPpXsT6SsiScaq7OOHcbY8qzeodme4hdIQqo/4jw9ep/p6Vj5m+y/DH0ebSGVmEkrMzSbkA7KtWnZ7R7jWr5khRQFRiOL8I2wM05JomrSXjWlkshaUHvJBsDy5+g2r0LT7S37PaUllC2ZApaWYjr1/wBquUlWjDw3LZyotNBsIdMsgGbqRzZsZLGqn4oyycLAM+cDO496iXuoR/FOEhIeVuHMu4Kjrtyqw0+2ZoxIirjkSrcvryqHGts7YJRQ/HF6gH25VMhtwGUqN+XvQkBD5JznnVhbR43rJs0rRMW3t9V06XT7+ISwSrwsD1/3r5n7YaNJ2W7TXmmNxdzG5MLsD4kPLnz8s+Yr6dh8GMn3rx39vGlONZ03VQQY5YO54eHcFSTkn58vQ11/FlbpnB8hVtHj80hcbVDkUkVJYYrkLxH0r0lSOPlZCKnypCKmvHgVGkG2atOxjVJRRTAKKWkoAKKKWgDmiuqKAOKKKKyGFLSClpgFFFFMQUtAopoAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAUbEEc6fcLJwuq4JGGGevn86ZXnUiMZ286GKzkLS70/3eAc02UJOACamybG1Yq2QSD5irC3uZGcByrD/AL4w39KgqmTvUmBTxDAqZPRMmfSHYKZJOyFuQEBxg8Gw+laSAHjwjcS9V6j2rC/svlaXs00TBsI22RgVuobbh8fERivKyr7M9LDL6otYRybmM8+VdzXSJgk7E49jVTPqvcqw2bGx351W3N1LKrtGSYZfCwI3QioTfSNePtlrPrkSwK4YHDcJ98bfcYrzntR2xlnsrwKGjWFuMf8AcqjJ+pIFW6LPcanJbu2RPh0I2HEu5P8AnnWe/aLoMs1lbWFjFh5WMjkD8q42J9TWmOCclyBy4rRTaZ2xml7OS/Fd5JdXaiMwg8PCgB8WfoavLPWZJLSFbSWNHu5zI5bcxq2VAPzGKzmhdmZNUufhZeIqcQd8NlCY4i+M/hzgAeW9W2l9nXnu9ea3g4H+JjeIOv4CrcbL7ZA+RrecIbolTkuy1vO1AsryMWgb/i7mPxKNyZHHM+2d/LFZbsxEuv8Abi+N8DJGJpt5Dkd0r4x9j9TWvl0i3002rTOoeAiXPTCAefoD8zWf7D2qLczXbEZnLSyEnHhJJAA+ZPzqI0otoptto9Dht7OwlkuYoW764lDSDbOT0Ptn71fRXccT9wWUELxEA7jfasGNfiOoSSFCCwPM4CjfJ99+fr50zLrK9+JWkZO8ToOfl/49a5nCVmqSZ6NJqdvGpJddueDUI3tvczcTe2KwpvXniJBIUkAl2x6713BqJjuHKjCLszN1PoKniyuCS0egM8YRjGFXzIG9ZPU2nlmkByFYYQk7nPpVvp1wlzBwh+I9fU1zexdzHwwxBpn6tvitYGD0zL22lXLcQfBy2XLMGb6j9K0NjC0KqikEdcdflXNvYzQRgYV2AzhUwB571LilZcGThY+Y2p5NmsGTkjHM706vPYbUwJVYbGnIWy3iO1c5q06smoCWXHSvMP27vI1ro8XcgRJxyGY9WOAEH616pagSSnHIbCsD+2nSJr7s7DfRcPd2T8UgJ3IO23nvXVgdNM4M65Kj53KZNdKoXnTzDGajOx869NbOBKglYYxUKQ047YNMOcmrjGijikpaWrASkrqkxQAlLRRQAUUUUAcUUUVkMWiiimAUUUCmIWiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRiloATFLiiimAVJhz5UwoyasLWHixtUydIiTofMRkt1mH5TwP79D8/wClMMvDuNiKt7RDA5bu1dGHC8bcnXy/36Gi/wBL7kJLES9tL/y5Dz9VbyYdfqNjXOpbM9lGedSYF42CjcnlSm2xkdRRCuJVGTzFW3aGe/8A7MrS4tOy/wDxCkcT5UHyrWXF1/AYLkMPIZpnRU+H7P2SlCD3KEqeY2p2R0H40yOYOeX0rzJu2z08SpIo3SaSSTKl4zjOBj5irWO2MWnyvlpMDiG3i2H3qq1XthpOgJi5K8uSsGJ9Mc660Pt1oOtyC3tLsLK3KKUcLffn8qFB1dGkpWP9mdOeKJ7mcHi7xinF+UHoPSnNemjjgDvGZFOxxzGxq/MfcWjYG+MCqi5tu+nZW3QDhY43Oef+elJvdiT2U+g6YYuORou6ZgTwjkMjH9BWotbGK3jd1Xdt2PntimLO3IuC2wBGMDyq2KeDhHLGKe2Juzyvt4Lm61GKxt/xSgqCp3wwPF9RV52f7KDTdLKzKpd8FsjJx0Ue1XbabAL83UigMMeI9ANhin5tTsowI/iIQSMBS2Kvk+PFC7PP9eWCx1LhKKzKmWBXYKOQ+o+gqptZJp5u+lYcZGVDDG/n58ugr0a4sbbU342dWj2OAccZHn5gfSq6bQYlDvHGwVvxLjn86XJUaRaRm+5+IlWSWdmRASqqOXrTN27OFDcSRqPEoOCB0yfPnWiTTu7JLcJYHCqB4VHQe9Vuo2yzLhAfC2chc4Jz96ldmylY/o2qFHUJG2wwB0H9K20Mkc8QcyKfY15qALedOAAKv4mznf16fIfWr/TtYxLw/wASNQN2YYH686TX4KUL6LrUL+/gPBa28TryHHn+1Vj6s7vwsqpJnHhrQCcyQ8QfCkbu5yfltVVqFuhtuLhMEf8AMVJds9FHmf0pGmFxWmhu2v1lfhEgYeeKu45V4FGdztWWs9KuDJkZT+WPqo8j6+daiy0uYcEkjEpGRjbmaz47N/kTxpaZfWMfBHmqbtrbwXPZTUBcIXRYmfA8wNqvlxGgGdyPtVP2r0621Ps5ewXI8HdMRnOxAyDW/So8u7dnybMfESNvaosjDerO+gWNiobLAkHHKqebKmvWx00cMouxpzk00a7O9cmtQOcUUtFACYpK6pKAEopaSkAhopaKAOKBRSisxhRRRQAUtJS00IKKKKoAooopAFFFFABRRRQAUUUUAFLSUUAFFFFABRRRQAUUoBPIV2IWPSmA3SiuzERXJGDigDtGjJxKrY/mTmPl1p8WDzb2rrcf9q7P/wDU7/TNRKVQcg0gJMVu6y8EiMrD8rDB+lX9rpzqwBxyBBG4IPWoFpf3CKEaXvEH5JQHH3rXabdWUyLBPBHEceCSNygB8jnIx+lc2aTIS5MahsPDyrqJTal0eMSwSbSRE4DY5EHoR0PT2yKtnjhgIQyPC5GQs6YyPMMMgj1qLdRuqF2j4k/nU8Q+ormTZbjXRRahp3wyrcQOZLdjsxGGQ/yuOh+x6U5oWmR3+tWwCeEuGK425/pUpbgxP/AnyW2MTjIYeW/Otz2csbOz0x9Xuo2hdQSFkUZH+kjcitXPjEWLHykek8UfcxqCoAUCm7m4t4LeSSaZeFRz8q810yTtN201RhaTxQ6YjbzAYJHkB51L/aHdL2Z0+y02HiZLiQC5nc78tvauXwyckr2ehzikeea6sWr63c399eta2rMQpReI4zgAedNXvZm80C4tdRsriS9gikjLnGCuWHr59avLvS7K/S1kZgUjIwiHcnpXpGgaFZQWKy6mFeRsN3DtkADcZHU9a7HkUIowalKRt3PeRIDvtkn1xTBtwFPhGW8q4W+i4cBkXA8O/I+RpmTU1ikCTcMbYzueY8685vZ0KNrRY20KoucD3pnUtXs9Nt5J7mZVSNSzegrO6/20g0UQRKhkkuNogm9eN9pL7WbpL3ULh3kha1ZWGfwsXC4K9AN66cWLnvpESXHbDtp+0bUO0GrmHTJJ4rKNv4UcZw0h/mJHTyFVd3Z65Nb2mopZus86N3pDkMxVscXPmf1GaTsTbR3LSEIr3Mj8C5G4J5VtdKs5NO1K6umYvZxYhhyCQ3CSc+7MWPtXbxjHSXRzPK+7Guwvbm6gvl0vUxIJT4R3g3H1517DBPHcoArqSByONvpXimr6fBq2qRrax/8AvDycUCwflYnmfQdfSvTZrG+7OaK10JTdSRIC4YAe/Kuf5OJRprt+ivj51lv/AIXlzarIvIEdRyzVXcaYXXJKhRyUDnWAf9sPdSvHNZlGU4VCSCftyrR9nP2g2+sSKJIOAtjcNxAe+1ckseSKto7YNPSZxqWl3sf8QW/DH6LvVRm8UOO6kbuwGyoPn969YWKG8iV0/CfPO/1pi60lJYWUsq52/ANhUKbXo0UzKaRqEiBEuI2WQjbi3P1FXMk8KASzsCF5FjsPPeq6LSWt3ZY44yqtlSdgfWudShnubfuREroNiqjP1JOAPrRafRSSctljpF3+8LodyuIyThvMedbGKNVgC9BWa0OAQWsYAUZ6KMACtLzhxnnVwMM7TlrobRC0hkYbHkKru0lomoaHd2ryvFxxkcacxVspXOB0FRrxGkhkQYyVI96GqWiE9nyRqESxTyIHyFYgN51TT4Oa0Haa2lsNZuoJITEVkYd3nOPnWbmlyMCvVxbVnHk06GDXOaDRWxAUUUUwEooooAKKSlpAIaKWigBulpKWsxhRRRQAUtJS00IKKKKYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSgUldrzpgSraHiIqy+GUKKhWzAYqcJ1xuayk3ZCavZFmgGKhvGBU+edfOong4syMQvkOZ9qcbC/wjlKWKKSVsRRvIfJFJ/Spfx4hBFvbwx/9zoJG+rbfQCmpNTvpvCbqYj+VXIH0G1XsaJcenagFDfA3IHmYiKlpNcQYEtvMmOrRkVR91cSHPdSsfPhJp6OPUk/5SXS/wCniFRKCkCVdGjtu0JhXuJQk1vnPcyE4B81I3U+o+eamxXmmzuZINQnsJM/hlBYY9HX+oFZdW1jGCs7jykUN+uaeijvXOJNI488ykbIf/8AO32qfEhts3lhpw1C8ijk+GuI3bAuIHKsffA4T896211o9xdvbWiieC2hw3FGQHOPt9Dn0rzvs4semyxyw2uqWtwRuRFx5PoSAcfWttbTfDKbhXjkmcZLSu0bn5tsPpXLlVPR14I/U3lnqNtZWyW0ase7GAzDBJ98c6a1Sx0PtTbi21O1Ep5AHIINNdm9PvbuMyXdxI9uwBVZSC6+gZdiPetYttDEAqQKQK5lafZrKvR5b2m7NaL2K7MSXthbvFJxqguJnaUw5P4hnYeh8zVJaSSNHGUu58nBVkmO/XNeu9pNHtte0O4025jBilA2PQjcV4ANbg0LUItLuYmh+FDQyIwPEPL7VouU1p7Oj43DakkWtx2ksre7kSz1wQ3Ck97byyEwueuG/Kffb2rYaHqF5r9s8XfzCaHhcyqhKAnoCchgeoGR1FVvYL9menQwpf6pYQTcQ440nUs4yduIHbljb3r1SKOys7T4aCL4aCOMkCNOFYx6DGBVZJRql2c9tSejML2RhvLaJb2OLv4pMpLCgQjzyBsflirhez9k7ObmGOQOgjJdB4gOn3qU9pIYVns7ovOsJWJZm8DnoWwM+VSbVLhLRBdhDJ+bgORn3rn2huVmEb9lGlWV7Pe6NdTWEsqFQqAPGmdiwU8jjIG+2aah/Z5cq0YuO0MqwpuUhhCZztvknpkVrdTsZpOJ7YyLLz8Gce2Aay+rXdxp2m9++Z3En8RGfhWNSPPqf851sss/0z8UWXei6R2f7KwuLIDvX/HM545H9z5eg2qz+LgvkwpD5OMFuVeP3WrzB4riMXIdsAoQH4vLG2RVxpepSWzYmN3x7k4YFR6MR+lZ5Ob2zaGKKVIv9d7O6OxaWaG37yTokKs7EdMn8I9a8v1HVIdLvZI7ZUtTnKSzESOwGctwKABnl4jgYr1NdWspbXOYyZBgvIDw59OWa847Z6I083eQrYhCOLjRW7xvuw+1XgdupBkTS0HZz9pslrPHbf8AEzoTgysAufl/nsK9at9YmvraOYBArjkOIn5bV88SaLJbgTXl7p9oDu6vMzP6ZAB3PltV3pfak2E8FrBrYa3yOIRs334h9qvN8dS3AWLL6me7R3AllCkZfHVf1NWEVvFngKoQRzFYXTe1WmvfpGZ2EhwPH59fat1DcpJDG6yAqeRArhVxdM2yL2gliFrwqgwCNtv608tzhUDMcY29aentkvbRoXxuPxY3FUcMd9aSG3kI7tT4B6e9aS1tGMd6ZfQvxcq7lTvUK451FibZS7cO31qUreHOKIu0KSp2fPX7Wexc+k3n70tmjNtKfEvEeMN5+vyryRySd+de6/tv7QxC3i0YYExPek9QP7H+leEnOd+det8W3jVnLnrloKKKK6TESloooASkrqigDmilopAJRS0UAN0tJS1mMKKKKAClpKWmhBRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKWkopgOLIV606skkhwoLH0FR6UuxGM7eQ5UqFSJDL1klRfQHiP2rkPAv5ZJD6kKPtmmM0Uwof+KKn+HFEnrw8R++a6OoXZXh+JkA8lbH6VGooGONcTN+KaQ+7GmyS3Mk+5pyG3muGKwxs5G54RyHr5VPXSBEA17eQ24Izw543PsBSArAuTirKx0i7upF7qIsp5kEbVMtINOLFLa0ub2QDJL+FV9TjkPeruxkWNwsb20L/APTtk43P/wAtlH3pN0S5bo2fZXsvrVtYELcBID0ldoyPl/vW0SyewgjSNruWQ4GBJxD6ZrK6drVzb2CqkI4v55ZFc/QYH2NT7G9v9VupIpHjKx/82KGQq4J5BiMBfrn0rz5pybZ3RdRR6hpqmG0RGYM+PEcY3qUXbPMCqPRUkt7VYm7tcDISMbD5nn71Yux6sTmsChLuU92wLDcb714r23sbC67daPMSomaUI588bj3r03XtQ+EtH4AWYDZRuSa8jm7DazrV62qajNNHcMxMaqfweWK2wqnybouKvVHs+mSPHGFiAYY5+v8AarZpnx4kDLkDbevNuzuv31lJb6RqiHvSOFJUGATyAI8/716LHlFRWkAJGcNuaylFpimqex5HhLhmHiU8K5HKpKMoUgOT6neo4fiJ4VyT57DFIWADYGfXlUknNy3F4Qo4TzrzPtWvwk0kc9q1xDMrIxdjgbZGABjmB1r0xWyDnDA+dQNQ02C8tniliSSFwQ0ci5FEXTsdniWltpNuCLe7Nkzrv37ld+oA32rV6X2aedoma9Lk5ZO6HdxnIxugyze5xVN2h/Zra2Vw95pcs1sxOQix8QX0Gf8AzWSbWdd0e/CzyOiqQuFAXjA9djiungsm4sFkcez16Xs1bpZqsl/K8sZyA3Hw59ADyHIbVlNVNxZALb2Es90iEGeSMKQOWxZi/LfpUzS/2kxvbi2u1s3m4Gc93Mp4FA5Hfn+lRtf7b6W9sol0u3dgA0ZfDYPQ4xWcYyTqiuWrbMNrOkrgXpitREoyyMzNg9eTE71nPj4bacSrpcQkB8LP3n14ScfXNeg6fdQa0siR3nfSbkJMnCFHkAuBj5Vjtc0nU7aQrJZFYidmjDcJPpua7Mcr+rOfJGvsi70ftCJ7NY3vJIwG4+CJQpJ98DP1r2Ts5dyTWsTJMxiwOHiTJA9cGvnOxlns5VKkopO6KuTn517P2D1eOaEWbuI2XkshUH5AVx/Lx19kdeCfKNM9bt3YhSWzn0p2aPvEyMcXrUKx7zh8fCynkQamtkDHIVjF3HZlJVIYis8vxu2TXdzNFawtJIwVVGST0p1Y+FeLiry79seuzWWhNY20kfeT/jAbxBPb+tOELaivYOV7Z5V+1jXP312tYJIJIrde7QgDbz3HMdawVduzM2WJJ8zXFe1CHCKicUpcnYUUUVRIUUUUAFFFFABiijNFABRSUUAN0tJS1kMKKKKYBSikooELRRRTAKKKKACiiigAoopaYCUUtFIBKKKKACiiigAooooAKKMUUwCijFOCPqzBR9/pQBwASQAMk9KmRWiovHcEDyUnA+Z5/Ib+1MpKsf4FI9c7n59B7V3wZAmuD4T+FBsWHp5D1oAli6nlBjtFwi83ICqvy5L7nJ9aSJbdX4mLXcp3YkkJn35t9qhTXMk2FbCov4UUYVfl/XnUi0IpPSJk6RdwLNcIELKkfRFUKo+QrQ6ZozO6cEgZmIA4SCSfas/psbXE4jjAzzJJwFHmT0FbOwMFnAxS4WMhcNMR4gD5DpnoOfU8q5ZtmeNJuzRR2ltp1m7NDBNdKuC/SP3f08x8qtez0mYolhaAxr4i0UXCoyfyg/qck+lZVC2o2wtrS4MceOIsfyjqzHr/AJirrTL61t7eOCKZzHHsOE5Zz1JPn+nKueV0epBKj0S2dSoAznqT1p58nlVPpdwJ8FWJHp09KulwVrnG0QjYpPOGkUNw7jPnT0lqhYLwgg86e4grY+1DSjjG2elPYloq59JgmyIlC3LAhZVG6Z6jyPrVatzqVnqNyBCJbcMFjXP4FGw+wrTvjYjbfPvXMkMbl9uZqk/0HIhpqhSzkkELiRSMI2xPnj7VX3HbGz0+97q7EsaE44ihYLnGxxy2IPtV4YECR+EEKT9xio95pFtPOxeNSxUKTjngU1x9k2TkkjlQOjBkYZBB5iu5AOAL8zUa0sktYIYo/CoyAKfdgCT5moaKRQ63oy6nGEMjxY3BRuE5+VY3UuwdvdWhjmuZHcbh2IBFejzMAuSwHz2rO6kivkPN4T+VtxQpOPRcd6PGdU7LXejLM1oYGLrw96SEZRn8p5ZPn78qzEen3rTMeLvZDuW79cH3bO31r1LtDpKXMZHgO3hBK4+9ebXiwwyYk0nxhtymFH6kH6V3YcrktmWTHxdouezZvbDU0j7nDkjLNdZwD6Zr0PXeyp13Si4uJ1mUZ4kbi39t/tXltjf90I0CP3anId1HFCfYc19vtV/b/tHvbOT4W4hXvEOMgsvttnceuajJCblyiVGUapsyuq9nNS0mZSwnfjOz90Sp/wDly/r6Vu/2bvdx3BaYSRggAGRQob54H61XN2qbUXlie9ZVY/xLd4lYk9cMdj7N9a2PYy3t45ybe5MZYghWjaFZAfQlgfrU55t46l2Xhhxna6PVdLZ5IFLIF22wasguTuah6dD3cIBYn3qWzrGpJOAOdcsFUdkzf20V+vX/AO7tNklVoxJjEYkfhUt0Gema+Re0GqXep6lcSXk0jSiVvCx2XfcDy3r2j9qnaJZIjBE8M1qIyJV4/EN9iB19xXhuoTi7k74u7zMRkkcxjmfWu/4kO5MxzOkokDejBrrBBwRvXQrvo5bG8HypKfpsgUUFjdLXWKUCgLON6Q07gUhUUUA3RXfDS8FKgsbzRTnBRTCyPS0lLWJQUUUUAFFFFMQtFIKWmgCiiigAooooAWigUUwCkNLRQAlFdAZrruzQFjdFdlCKQKaAsTFLiugldBcUCbOOGjhp7h2oK5oJ5DG45bUU6yVyqZYDzoKs7QLGokcBifwKeR9T6U27tI5Z2LMeZNdMS7E/QelAjJoFY3inYON5VjjGXY4A86O5f+U0/boIVlmZt1XhUDfc7fpmgLRYi+KsljYtszANINjK/LPoo6D59as4762EgilkcwRE8Ma85G6s3ln7DArO20vcLJKigFV4VPXiOw+gya7tZVhUNIeR8KrzPufKocEyOnaPRbKeZ9NaNAF7454AMAIPc5O/n5UmkwalFqCuYjJEPxKqDdfQ+VU2iC+vZlMZZY9vEccKivVuzcMMU8vet3skcZIYjAYH/PuK5Mn0s7cU+SLnTY57WyBSIL41IUdFxv8ArV1FOQFDBjnlgc6zes6tHbsgadYuN1RV4+RPmBzwaqIO0y/FHiu1WNHALStsVHXlz3Fcyg3s2s9BMbvhgMfPlS9yWCkYJHkahaV2k0nVvBaahbzODgrG+T/eraOxEkizFmDDpnbFRTvYaI5gll8BXAIzUqK1ZYVZhy2YGpqIEA646+dOqycsirSIaIvwpGXXfAzgjmelR2ifg4mHiHOrNXQ7KdxtjyoIBFOl6FZUyvwNg7FFH1NRHukUeNgM+ZqXfQOsoKxlwSM+xP8ATesprWl3k5jWIHgZH4j+aM8QOQfLBqfdFpFlcahbRZBdTgZK55Cs5f6rppjLJMjR8iDuP9q8l1S+vpbnMF2SFJAGSpAztjyriy0rX7ybKuxVhuX5H3xWywKrbGpUa7UdZ09+8jinUn/psykH2J/Q1hr+7sZpm4U7sk7qUZferduwOrySEgxIG6KwYH5GtZo/7P4IURtQnSSVQMGMb+xHUVouEPYOUmeZjT7eds2vcSqf/wBcgZZF9iBVknZ46vaKDDJHParwKCQC6Ek7k/yn7H0r1w6Bp1qoQleEDiyEB+e2/wBqrbjVNOtJOBNQV1BCsixklM+eaXlb/klRXsw9v2EvWKmd5YiRsZCpUD3BJr0bsvo8NhbCG3v4yy7lOLr57j+9Rra9uopoxHZd7ZyMOJopMr/qHVT8/lV3F2XXVLozSNJGcgghtyPcbH571yZpylqR140oq0bTTpHEaq64OOhBFQu1U93BpTSWLqk45FhkfTrU2wtGs4lRm4iBji5ZpdQRLiCWJkEgZSGQjIYVC0tmMq5Wj5l168vXvZg4jAdiSETGT126fLBrMTWM8kTzx8ZjXHeAnJTPLPofP5V6/wBquzid8zBcgHwpITxqB5HqPesVJpxhyY8gMCp9Qelevhyx46OLLF8jFC1bypfh2HStN+7iCfDSPYoi5IrfmjGmZkwsKaZCKvpbdegqK1rk8qfJC2ip4CKUIfKrP4M+VHwvpTtBbK3gNKVPlU82+OlNmGgLIfCaXBqQY/Sju6Asj8Jop/u6KAsrKWkoFYmgtFFFABRRRTEFLSUtCAKKKKYBRRRQAUUUUAGaWkopgOxjJqQFqIDg0+stJolo6ZRXIWlL5oDUIgXhoxSg0Zp2IQCneHbauBzqVEgYb1DYNjHdk8hQLVywNWkMKk7in/hxnYVn5BWynFmQc12Lerf4fblUeROGmp2Q5SK9oQBTUwCxRxj1c+55fYVKlYDNRphxTY9hWiY4tnDIRHHGM5/Gfny+360/bWoZlyWB9VzXMZLyljvvV/pvBMwUxZb0OKmUqG5O6L/sxYvPcxxxvEXVgwiJK8Q+nOvRO0WvWXZqSFApNxM+Ac7quOW+3t7VU9kdNiVo7kZ8OcKxwR7+Yqo7Z2g1TWIS5cJa8Tyqo4hwBeZ8vn51xNqeSn0d+GLULOZPh+1LvcFWtSZMxM0gKkkdRzPnVFcfs07W6k7RQzQXCJIQoaUqR679N/OtF2MuLSaV2libuJPEiyRAxoDvjOM+dbCGf4F1gsQUK+AyJN4TuMAgg423HQ+dXLK4Ool8OXZ57o3Y687IrcNrREQkZUjSFsyOwYHiHTAA29zXuGhXU5slFxFNFn8IkGD+u+efzqjWCw1d7dr62VpbeQOjyYbhIPmefXerueRpAgjjMiE8wcYrDJkc++xxjXR3rFjNdWztY6jJZ3HNWPiQnyK55H0IPUVS6HYdqbS5upr3V4rlGjxbxMeIcWd8tgH03+tXMh4olL94B/qGf96hWWoyS3k9s8ZWBU2yhUqfP/MioT1RdbNDbzySQq8kRjc7MPI/2qRHJni2xwnBqvsrtZohxBgeEZyPuPT1p5bjgmZMb4z6EA71CYNFhnIFV+qxD92XRXClo2BbyyMVNVhwjeuLiMS27xsvErbEHfatG9ErTPnbtBHFpbKl3acc5LFeE/iUY3B885+hqPYdsra1j7tLeZUI2KnJU+1an9olnb2usPdTgMjhUWHGMAZOx89/1rFTw9nobdZBOqBuo6/LpXTCpR2hyey2Pbzun8cMhQcpFHFt6jmPvTz9txdpi3aNwRjHiG/tzB9qxWo3tjE//BxGaMHEj5/Cf6UQvDasGuRGIpRxRsh40kHlkcvvitPEquiOSvsvBq9++o8CapNGrco5mBUH3wcGri7F1fL/AB7e1W8tziQs4Yt68X5M52OynzWsBe6mhdiImbA8L5BIH+r83zH0qRY688ckEyQTxmKPhcRPsV5ggHOB6f8AilKDq0VGUbo9L0O8ezxazd5GoJBjmOOE+ZJ3XpvuN/KvRtD1SHh7iUPFOnMSLgn5jY+4rx2x7eWdxaLDJPGJkI7kT2hVYugBZCcA+YAHpWn0rtGZZkF9F3M4bh2bi7wAc1x+Ly3AztXBlxyTujrhKE1R6sl4JG58AzybrTdzdwKQXcKejVUJMxsiLXLx48BZeHHpvVVfX5CZuGijGMNlsZ9h1qIpyMZ1E41yVNQkaBZ17xCeDHhP+n+1ZFtNR2y4ZSRxDiA8Q/zrVpc6hbSwnjeNJF/DKi7+xqml1ONX4zIWY8/KumFxVI5pyTGJ9OjXJwB6VWXOnqRjAqdcaqhOARk9M1HN2hGWIraMmZOipOkFidqdi0Djqzju4y2ARV5YKsgBxTeVoIqzNjsxsNqRuzC45VuxEnCNq4MSZ5Cl5macEeeS9mmHIVBl7OyrnavUvhYyu4FV91bxgHw1SzsPGjzJ9EkH5ab/AHLKeS1vzboWzinorFG/IKrztC8SPN20WYH8NFepLpKMM8I+lFH+hh4kfP1FFFbGQtFAopgFFFFMAoFFFAhaKKKYBRRRQAUUYpaYCUUtFACV0K5roc6AOxXWcVznauS1BNDvHRxUzk0cVAUSFapkMgFVgbFOrMV61LjZDjZeQyZare3VXUHasrDd4I3qyhvDyya55wZKtdlzOUVTuKp7mQZODTjzFl3NV08oBO9KEdkyVjcr70zxZkDfOuHfNIGrpSLUSbbg8x0rYdnO6NwrEsx5Y5D/AM/rWLglKMCNyOlbHssst5dA2yvlRmREAYY8iDsfmRWORFY4/Y9ZsJFhtCZOBJVX8QGxGNjWV1fUUs7qe5XueN4WSTiXYnoTjockYrq71R42jjDtGUIDjIHDv9vbpVVrvjtZe5kR1deEu2wXnnJ6jH6VxqP2tnqR1EzCdvr6wizbxwNIsmQXBIIz5Zx/sa0PZv8AaNFqV5Fp97phV5Nllhk2Xmfw45V53JZcbGLjA/6eEOGHn/5q20HsxqyazbubNXCMGZeMbj0rtljx1s5VOdnrkcfwt/HJL8QkBGf4jkLxg5AA5AnflzrO9pP2syWl78Pp6Z4NnYNy9B0radn7UfBie5tHgyvB3ctwAOHz4cH+9VPaDsR2c1OSW4S0UyvtxRS92c4+/wBK5YuCl9zR8mtFf2d/bJFqN1DZahZNAzDhE3ecS59dtvethHqULM6NPMuDxLLIMAZxjgYbjHPyrxo9mJtK1KJ9PkQ3SPsswyV+Y8J8t62NlreoWlusOrIzHvCFaRASq42B28Se3n0p5cce4Dxt9SPTNN1F5ZO7vou7lUEidFwjgHGSOhyMEfPcVZeF5BiZQFLAoeeDy+n6GsRbaszSGQywKkwwEWLhDDH4hnb3BO43FPvc6jBfyXDG1jiMTPHKGyJARsTvsPl1xXJxZub2yd+7QPnbwsT1PnVgviGc1mLLVHeBWjInLIAGDAqwBA4h9ftWliIK7U4P0ZzXs8W/bPZm7e0hQP3iq8zcPi4VBABx9vcn1I8EkkZ3J4ic19UftJ05JdEvJwzxzPGtsrK3ikLtsiDlk5P18ga+Z9V0v4O5MMPFKVzxsoynPYKeu3WvQ+NL60c+X9K5ZHX8LEGuu842w+wPUD70+LCfhGLaVmPpipw7NXYVHlkhjR14h4+I49hmultLszSbK+GW4hfhRgT1XnmrG3NtcYldJ7aUNkTLgx58se/lWt0f9num38MDNr1uZScsm6nh6gA75rY2fYbsXpsDy3tzHOq7FzNy9Bg865cnyII6YYZ+zzaBXQLPaXKwzhv4piiwcHbO/L5Y9audO0thm5lneReLxcA5euQa9H0zSex8UiCK4LGLcF+fD5EnmK0vD2esowIPhmLjiVdjxZ8q45/IvpHVCCiU/ZXVVlPw6yTFQowXcsD75FddqtKMq/Fd6qmNd1X8LD/T09wa4kmtb27PwMcTyqeIRiQxN+mD9aznai/vJcxpFcpwHHDJGRj2YNg1niTcrQZ6rZl7u8MRdcEDGxU5+9U8t8ck8W1N3Uzl24gFJ3IB2+3WqiSdlJwa9BRPJnKi0+OJbNdPfMVxxVSCU+ddrKScVfEzc2aTS5DNcKCTzr0TT+GOJd98V5bpt2IJA2a1ttreY9jj3rnyp3o2xyNg1wo2yKjS3qIRvWTuNb4Mniqku9flkfZsCpjCTNZZEj0Yaih5Hao1xchuu1Y2x1ZiBxNU+TVFOADQ4NMqM7L6LDNVraxA4rIWt+XlAztmtZp8nEoJqJJo1RbpCoXlRTkbDh50VIz5ZoooxXpnEFLRiimAUUYooAKKMUuKYgFFGKMUAFLRg+VFMAooopiCg0UhoGFFFFAC5opKKACiiikAtFJS0wFBwakxXHDUSlzik1YmrLA3ZK4zUZ5SxpnJozSUUiVFI6zvXSjJpsc6fiGSKb0NkmCIuQAFJ8icVqdCScOI44iMHOD5+fvVFY24kYeNQegNeg9ntEvVZJoiyopyx5jHmDvXPOWi8Ud2Umv3V3LHLa28NwJAFYMxGRvjYirOdJB2ZReJWuUjx3ediScb4+lVHbjvrTWYJ5JHaEKDlcKWGc+GrixlkvIO7jKujIGlbIITrt7Z39Qazf8AKZ1x/popdL02OTTVvgrsUcmRYx4hjGdjz61s7SWVFjaFCCfHxsRlQxOSp/l35dKzkFnJZRyhGkEfGzYXYufPbntvVvp0wkiZO9UpIu8R/LgYI9qU3y2VFVo2l1ccNh3gcS5xgNuAcdBVG+tPJxRcLmQEgCONixJ8uf8Aaot/Lbx6XGrThJI1LRuNyM89qYsb6O/tmNnGHmU8MrAHJOOuMAVko6sNdEOa51nTpoo2mMnetjgJDNwkb5ONsfQU1Lc2dvagS3dw9uBhou7Dd44P4lIO23tyqf3Oo2oj7+6BUkN3JhzGx8s539hUbU7+K0LSSWMFu48ZhD54z02OSBW3ZPRI0a9ju7eC2gczQW7GREuryKEoc7Dfcj03qy1N+9vWiZmhfUVCyNEMxqApyMjI4W35dQKp+zd9cSvJJHbwx5RpFhjskRix2VFJyTuRz6Cq7Udb1Cxs5BHLI10hzMBwBU4s8XLbhXAXJ5lj6VLg3LQ1Ols1Wm9rbbTjZ6fYpLqJit/47wRlmgbPi8OAcnYkY869G0LtK+r6jJbxW+I40VmfizufTy9a8Zs+znaC6t7e8tII4uHuULxOIQishaQhVxklSoJ5jIA3zXrvZ67tbBE06OYz3Ubd2+WDOoJyvFjkMZ3rnyxjF6Li+S2SO3Kxto0qyuFiaNjKWGyxD8Rz+UnYZ8thua+ZNX1MNrNxHase4RuAPjGBjfAPLfNfUnbGJrns9c2omEHfR4kk7vjKoCM4HU9B/Wvm2XspY/GNgahJg8RVoQufTblnpjNdPx5KN2YTi2tGXN2cOPiJy4OQVxgj2qZZ6pBKHW+EgXI4e7TiwOucmvQdM0TQJVjjbRkcKd0lLhl9SRz8vL2q3tDo11GINP0fTxjMZjkjYNjPIEnDA+XOtJZl+Cjja9nnsFubW+CwyrPbOQYDFEWEhPvyI6givTtO/Z1Hqml9+9zLa3BbZWfu1Y+ux/T+9aLS+zGmssUkFosBBzhFGAfUVrUjdMpGYpAANh4WFceTM29HTHSo8jm/Zl2ltLxRDPYXEMZ/hkngfPmDvjFWraHrun2yI3/EEDJikVWC+n4OXtW8fV2091F8kscZOzlMj5kcqtbe+iuU7yGVHX0NZSm5dlxnKPR5/YW8N4Ibe702SCZeR7glc+SnNMdoNOMKSSGxZmKcKkguMfLdfnmt7e6hDZFXktmMbHHeJggH1qPez2V3bcL3CKGGVwd/tURdMc5OS2j5sv7aS2diYQgzuMk49DVRNE58YU8J5V6pr1jZxtL8NbadcTBsuXvGIGPNDjH1rC6gbiVyj4Cr/wDrTZU+lejCdnm5MZnihBrtQal/D5alaDFacjn4MYRypqfFdlV51VzngO1MGduVVViVotLi8Ldah96Wbeo4Jc1MtoC7CnSSHTkyTBI4G2atLWORyNiadstJaThIU1orLSyv5cfKuec0dUMbGLK04CpPOtNYsFUCq82rKRhasbS3bbIrF7Nlot0lyo/vRRHGQvKioKPmkJXQjzSgiu1Ir0jkoQQZrsW+a6VhTqvRbHSGhaV18GafWTFdiXFFsKRG+BPlR8CaliWnBKDzFO2PiiF8Ac4xXS6ex/LVlHIvlUqJkJ5ClyYcEU37sb+Wj92t/Ka0WI+HbFMOVU0KbDgilGmN/LXLaawPKroS4Oxo7zfenzYeNFD+7X8qQ6a/8taHKZpCy+Qp82Pxozh0+QflNIbCTH4TWhLLnlSZXyFPkLgZtrR16GkW1c8lNaMxq3QV0sKjoKHMFjM98DIRnhNcmzkH5TWoCpjlXBWPypcx+MzHwkn8poFnKfymtQscRPKpcVrC3OhzoPGYw2co/KaT4WX+U1vhp0BGf6VwdMg33H0peRA8TMILaU/lNdCzlP5TW7TSIiNiKfj0WLG5FJ5ULxMwHwcnkacS3deYPyrePo0PQiuYtCjdhuPnS8lh4mUuhaf8VKq8PCCcFjIBXr+iaXbabYkxSTfhJbJyv0P9Kq+zvZqyg/jvEXYeR2FaS5kigjZYwIxwkA4JxXHlnbpG2OFHmfaiC1vryZpEZpkTjjiDDlnmc8htmuNMtI7P4fu5Q1pIMK55vlQW9hlvtUrVmWaOMwZJeUxv3gyQnmT+g9aqHuJHuIZ41JjhlIiiYDhUjG/rkH/MVrG3GinSdl3cTxvZTkt4oeGSLbBUEZwD13B+lZC/1iSC6PHIeLchuRAPt+vrV1eTLdWvcxuEAByp2K75HXpxVjtQ7x5VEwJBHCGG4G/n/StcUP0jJP8ADmTVbiSZSZpHVeQNbTQ9YkSz4FBCruVQhcjqCR0rDxWRWYxNlnBx4BWn7N6dEZZVKzxORuWKgfrWmSKcTKEmpG2W5+LRVjiaFFXiLLuoHlk8z9qp52t7a9xBbJJIWODK+VY4zuBu2Pc/KnzG0gjimnKxcXDHGp4zjrnBxn15AU9dzLpwi7uN2aQcX4wCqjcDcE56muVKjouybF/7dYo1xqaWTz5/iTDg4k5AKi7qM5ON843ql1PXdCsb+3js7AalKgKhypYOcnJ4ceL0zkb8qqNQ1qeWeTjVp53wqISHEY9cjK+1V9po1/c3aSM91FJMMH4UEYXyyzAb45Z96uOP3IiUvSNU2udptZiS2UxW/evwQccvdpH1wD5nrxAYwAMVuf2YaUunSyXGoSNLfgGJpsHhbLZOCeeDsMbeVeeafoWjJ2jaytNPvdVSEA3DEkFJc/iBGwXOxO+elejdm7m8+JW9vLF9P0yJWWOBZG4G3J4wm/XOMb8jk1hmaSpGmNN9no+rW8M+nu08ZkSMcfAN+Ijlt1rwrWNZ1M6rdNBYqWgnKERx+Ij65PL1zXvdjN8VaBiPCw2PmKw3avSBbaZdQ2sa2NpCDK10WXilkY/hGd88t/XA61nFrsFrR5ce0t5I+6tGznh8L+E56MpGPpVhBYahNdJcQWKA8WWHdbqfTPMVi7zWRP8A8LeloctgzhAwzzBYg4PuBnHU4qfpGpXXG1g983eg5WFrp4mOeRQjwuPKuqUGloUZqzYjX57S/WNTNayrlSHcp15HOx57EEbVzqXa25lhMNzdXMc2BwykAvEfcbMvrz8/OsvqEt1OkpkhmuJIQXPBIYpfMlwPxHrkZz9qi6drcN5PDb3mnngbwpNLdkcQ6eIKAcfWo8Sq6K5bo0EPbXXbfura/WG/gkHgmbZZv+0Nyz5A1d2GvPLLDc2+U8IMluFCsFP8jjGcev2qC+kW8TCMpGyKMMUfvCM9GQ4zn5Z5jelubB7a349N7qZlwWRWZlb/ALwW8SMNgdzt12rGXCXSNoprs3VvfSm3eX97K8LkFZ408S//ANE5fPAqFr17EunLFI1pLdMv8BwgKTk9ARyPpVFbz397DFM9iIriNgGaNhxKPXkfkc+9SdV7u7tRbYikcptDNKoSRvLc5VueCOZrGMVewyaVowlpqFjdXfdagZ42BIjuAeFkOcYY9R77iqi/Bt72eAkccbleNTkMKl6gYb0d7IRFdIoTYHE5B3LHo+Mb9cVXcKPle9BYfhJ6+ld6/TzpN1R3AgIPnTc4xnFJHKAeE0rnNL2C6Km4jYsdtqjLESatJgDUZU3reL0YT0zu1teMgVqNL0Ys4JWqzSoC8y7bV6LpFmvdrXPmyNaOnBjVWx7TdKVEB4atI7AL02qZbxqqAU65ArktnXREFmhzkZp5LdU5CuZJuAHFdRTBhTTsTQ5gDpRXJkXPOimSfMQNdA0grsAV6RyCgmuwTSACnFAoGKDXYzSDFdqBSspCjNdgGhQKdUCnYCLkU8JGA50Ki11wLilY6ENw461wZ286CoFclAapUS0wE5zTgmJHOmREM10EwOdVoWx0SnNdBmNcqnrUmOIY50m0ikmzhVJFOiOuwAtcsxA2qXs0WuznAB50ZoAZulOCI45UANgnzpOEk86dCb8qeSEnpRdAR0VganwbY3rlYDjPDTiIRjANS3YEyMrjBIpzgU9RULi4ehra9k+yU2r2bX86lIc4iB/P5n2rObUVbGtlJbQA1LW0ORjOKu9T0L93HiAwBXFvCjjes+V7RTRVfDZGw+9SbbTndxxRtw/zLVj8IM+Hn61YWEJjOeEZ9udS5CJlhaLFCFYnAH5hWf17Wre0ungLynukyViX8RPIZx+laC6uGgtndkVARsP8515j2k1O5uLxXhb+BF/zQh4d+oLDqdvYVMI8pbHdKxnVJe/uH4W4FZOFUUYz8/QZJ9T13qAs3DFBDIpMEDKQM7seZJPnuP06U3aq1/qMM8RBjRSWdhhVB8IIHQdAPKpzmM2cwlHFD3aqwHM7Df5Hl7101Whd7KjVX4LnwjxlCvF0GSMfbFULzDujCch+e3LPn7GtRfYltI5uMLMGfGOUmAPF74xWeugFu4+6kUFtxt0PT5bit4GE0RoopIxG7THjP4AoJPzrTaPBPNaXEriRpQBwho+AevPnWZujcRhgSSAeHJ5j0q77J3F0s0sQMjoy4xnH+GnPomPZbRa3c2TcTRSQlcqyHC59OIbgU9Drl7eOWUJHHxePukx7eI5Y/wCGm3jslyeNRdE5kaduKOEf6RkM31p+ytJ9VePvGb4OBSxaQ44vUgcs4xjyrJ8e6NVZLinggjSK4QyO/ikQMERQRkBiBksfckCu7F11S7eCyggtYdw8/G7sx6oMEYUDn/gqDLIJLzvSonKtwjjOIwW54I6+q/Wu1nuLiJFhGNJtweC2tVKxzYOxfqwJztnp9c2ikzY9nVl0+MxWZBMwJV4UhB2wFyC5OOW/QcsZrcWcHdmB9RvjcyoSI1QDh4xsSOud8czXnnZv94zaaLWXRrS1s5ZP+JNsGiljDHAJOW49t8evStjpXaPS7a/aI61A3GoS2syRlCMnfhOAeY5k7VyZYts2i9HoFrgRhVUKo5YrI/tNRG7OPHNcxwxzfw144+MFuecDfOAeWPPO1WnZjWJ9WtHnntntz3pCo58WPM+mc1ZaxYpqNl3LpEwzn+InEB8sjepi6X/hLX2Pk3932VxdC3g1Ad4wHFDKpiWby4dyAx2I6H0rq+tIrSOO0n1MMrDMU0UZUKM/hOeW/PGwPLO9aftTYaNb6jPY3bLaXUjsPiHUtw+RyOQP+ZFd6ToUWr6U8UHw11exJxmPPC5I5lOjAj713eTSZmoW2jJwzXdknfxTLcGF+LJU5U/zKw+WcEdCKk3Lx6pi/g4baaQ/xFIHCzdcgDhYHmDgHnnOK1/Z/svZXV4sW9u5B4leQrgjIGR+U9Dz2NXMnYy2tA6Swi5tHOJkUlZEbo2N/F5Mu224PTOWaKZpHEyl0KaW4gjtLnDMgJjAAHCPJf5lI/L8wDWns9NtZdUjdb+ezvVUPwKSUmQjmcbHyz9a6tOx4hhjEN+slkw3ieLIOfTpnmQDz3FWl32fu0S3mhlj721GY+It4k5su+ckHBHufOuWc03pnRHXZoodJt57ZnhEbSEYZsDJ+fP61mu1XZldRsGMcfd3aYPEoByOW5G9arQZmeDvCqEFRgqMHHqK71izS4TjSNmYj8h61lB07Jm+0zyH/wBPQ3lmxlikW7RsFcEd4P5t+v8AeqyfshMpPDGCM8xXoyi4aXMnGcni4ZMbGpy2yMvIAeR3ro8jRjwi+zyEdl7nJAjok7MXQG0ZNev/AAMRPIUPYwgbqKflYuETxWTsvdZyYzUI6JPFJ4o2Ar282cOccI3qvvdItypbhAqlmkS8MWedaVZiNxld63GnJhRUeOwhSbwqanR4iG1Zzbk7NowUSzTiC5FRppsNipVsxZRk11JZiRs1NAuynkkbc1Hju3D4wcVdyaaGGCcU0ulKNwc07B7KprxuIjfb0oqwfSgWootE0fNozXYBoFOKK9E4xADTiqaVRTqiiyjlUanFjenFp9cUrGkMLE9OrE/On1Ip5ceVKx0RhHJXYjk8qlgA+VOIgJ5UuRVEPuHI3WuDBIPymrdUIAHDT8UaE4ZcGjm0OkUHdOD+E/SlMTeWPlWl+Fib5+ldLYIxxmjyhwM5HA5PKpSW0mPw1okso49yBXeIguAFoeSxqNGeNpJj8NNdwwbcGtOiBjjgH0p791pIM92KXkoOJnYYDjlUoW7Mdlq+TSEB2BqTDpig7g1LyD4mdWwZjstSFsyg3Faf4BFWo0tsMHFR5CuJR9yAMYGa7SFefCKlSWzA7VwIZQdzVWPojSWyM48O2d69q0C6tX0mBYSoRUAwOleUwWzSMARmtBZQTxx8Klgp6A1lk+yF7LXtbexXZFtbENwnMjjl7VnIBJGwH61dLZkjda5a2Ct+EYqYulQNEYCR8eE1JtoGUgtKEB9d66WE42H0NCI3EeJnPsKLEV/aG9ggiSI28058gvg92OOlYTVr5bqGW1hA4eFpJZM+FRyA/wDHmaue2t1LJJFaxC4IHJEfAb2Hn69POqKDTmuLbuFYY2DcB8I88E8/f02raEUlbFfohdkMz6gsat/DV+NlOxKgY3HIDGfapd+jWomvImDgM/GFGx8vlt9hUbTJI9H1S54gO7ZW2PMj8KL8yf1q0uZY7nSZUUB2klI2PQkE4/StZf1ZEeqM5PIf4dqjFpEbiUnfh3JI/T6U01j8ZqKDhCAgtxcvDzFTU0xzeiQHjDFnGOZIAOPT/erVNJkgCwoOPiUYLfiwP6Har5pdE8WzJX5JlkUHKM2T/nSrPs9G7XcTpHnJ2wOnUk9BXGq6a3ekBSJDjI8qk6TaTSNHbZZVc+M5wCP86U3JcRVsttTttNsDlkjmJzI0spJAPpjmfIUyNZiisQweJYl27vkGPPcem1XeqaMt/pUcQU4hP4V/MTyFZ59Ht7eOWa6cRQoQkeMEu3XHz8qzi4tbKaZGs2k1W9MTRiJZQQC5Ys4PP/SuM7+RrS6hcfwLeG2EcMYjVRIHCIoxzPmxAO3QCqy0ht0lLkGMzeIqCSwQdT5ZxjG1RNTmu5L+5uZYTxGPhijA8FsrYCgD+bhx9abXJgnSLJO2C2NpbWzxrM5SWWKSTi4UwGC8O+5JG55DbFV2o3tte6TbyMkEM1w3Iqne8I5nO2Aem242zVLcTzIYbm4CNHxBFDbl9yevT15VVahLc3UcM1yfF4lXbdjxEk+wyB9qfjQeRn0H2B7UWKaXb2cXA62qNGzRclwc8R8+I8sddtzXqFtKt3aJJwkCRQwBFfPfYjssw7RadBJJhraHik4GzwyZ4mGx/KSAfXPy9+tbmJkUIylAMAjlXnTUYz0dDtxTfZge3ul6fwFryzbcfw5rbKsvnxbqMV5LHbHTr6GeG6uraRXzGXyUf3BwwBHv519I3E1lO7RFo2lBPCGIO+KwvaC2gvEuEtbmK2dQO8iQxqH9W4lyN+RBq8eSvqJq1ZirjWJLORHv5JUimcIt80ZBiOR4XbqOR8WDg16Hat8RaQzIqtcEEOgYFnUHBwdskHr1BrynU9SuNEhmsL63aZuPMbuG4ZQNvx9cjzzuBvVz2O1dVcdz/wDjSqV7icjAIGNnHUjIIwD4Qd8U8mO42VCVukewWsUKxRpwhC2Sqt19N67ul/hcIUcB2z1HpVbZXI73hllLJ4WCyEHIPJwfpnFWD/EQzNHvJC5xvjij9fUVyUX7KazmMDlZou4k4sJNHkq3lkcxXWqa7FpYT4hCRIfxIpZQfMEVOdUtypxxRODsx5+2eRBqg16QWsXeuonsSOIAtwPGw9acNumVLeyBPrZvLoYBgeNSr7cQcZ2OatIAzxgg7Yrzi37RmC7limthG/EfwEPkVpdL1f4iIOuR5gnnXTLG0jG0zVRo3U0roSCKhRXp4fOuZ9QkRchSazpgONE3FzpqeF3TGaq5dddWxwUJrbM26jFXxYWSV088Wd6JLQgZwdqei1NWG+KeN1E68xS2FkBZTCcDNdnUHXfBp49056Go8whA5imKwGpMzgEGp0VwWQeGqoSQcQ8VSku4hhQ3OhoLJ6nIyRRSxOrJzFFSOz5ZWnFplTTqtXpHEPrTq0yrU8rikMeXFPLj1plWWn1YbUmUmOoKfRT600kgHSpCSrUsocVTUuCMk703C6E1Oi4QOlQ2UjpIRmpDW2VBGDTIlXPOnVnwOdLY6FjtydiDUyGArg4NQGve7bfNS4b7iUYI3pbKslSoCvP6ioncZYE4xXbXMjDbemxLIGyV2oVgqLK0tUJ6Vara4XYDNUcFw64xt8q0NjcB1HFj6VErLOYrdvpUtYSByqfEIGGfDT/dQN1H1rJyKSKaRX5AGo7QFjuKvzaxdD965azU8m+9JSCig+EU8xSPZIRsDVxJbFds0kVsScZFVyFRV2cASTcHatLbLH3YqIbEqcg71Jj7xFxkUN2Sx52jB6VHYxk8xTU0knkNqjl5N/CKmikPtHHzB+9Q5iqhi8jAe+59q6NwynDCotw5kVsAZxtk/eqSE2ZXtC6d6Z5yyoBjhA8TfXYD35+VQtGu2vowoULChCxxjxFsdSev+cq47VJGZoFuHHdrssSDPEfM46VXaXrJurx0gQLbIeFABz8iT16k9K7FG4aMOVTK3tIJU1ObLZMpOW6ep+m31qXpF2n7tZmHjlHADn8KnO/vU7UNOGpEhJk4c8XEeijr7dfc1n4UMNzcRsjiOMcADbZPUn6VrFqUaJkmpWjVxTWiwWok8JVPGF3yxYf04fvR/wCoIIjd3HFx4ykYJ65/8VmUjmlhhhiYEZDlj1Jbw/ff/wAVGljht4mRZQwUY9yaXjQubLb474tlnY/iwrH+tTLKXF0ZD4Y48Dw9c9BVHA5aHu4l8PIHy3rs6gYnSADcnC496fD0g5HqiRrc6XFwELJLGQN8cI5ZrH6joErXsYe44YUXCZ2AXz9zz+lSdM1SSa/e0hk8CR+AnkMYGB9zVfrOqztLKviAkyZJDvwRjbb1PL61jGMlLRbkmiR38K3CWtrAG7yRQGfOGA5bddgefmKpdZvHlkvD3zOzo+OXgUMuWAG2efyqTb3SQW5uxxPcvG5jY8oVxgYHU9c/OsRc3DzXDOGYk5Gc8xW0Y7M5S0T9Y1M30ypAOC0iPdwxgflUAAn1OM/OtB2d0+2utXtzfLLcXcwASKJeFI99mbqcHB8NVOlaYq2D3k5ALgrHnkh/mP3q4a2u0mt9TtVeAMkawOTgq3GV6c2wPvSnVUOCrZrdK7bJoDR3VnYJczXozdRg8LJIQCSPffO3OvTbftNaadPBFdWphN6pmSYbJkAcQbybf57V5K1nY6t2gvYJ5GW5mMkFrOv4BIoypLDnxYGMdcedaDRe00uraWbfUhClzbqJVKyFDlfxBgdjnIB6YPtXDkxrtI6oyvtmjl7UaE9488cckUnxBjkLbeL8IbnsDjGR1PnUjtHBc32lwy2k+mR8bYZLyHKuegDZ8J+xqons+803U73T4/iJB4/hxGP4ZKqWU7bggEgjY8tiK0+l2CTdmfhu9LwumYzLvgEZAyd9vnWOouzR7R5mjabdH90ai08MZcB1kSTgUnYEM+6eWDxKfMV2vYHUdOmkaykDSR+Lg48CZeY2zuR0PXzqvvtD1CPX0tbhblYg/AkkO6EZ3AYHY+m2fKvQuyV7ePC2karIl28eTaXPBwtIo/J/q9PrvvXRkk0vqzOK9tDFjem40C1vRFtE4t7qIjDKDtkf7itbZX8LQwpxiWJo8xyDfIHmfMVkLmf916gmsWx+L0y4kMV0h8DJvjBB5FSORHtXd7dXWlGS3t54ljbiaBJGHDIOfybfpz2rlkt6NkkzR6kkt1azwA5jPiWRMZB8iD+tVVylzdWZMUiFtsxSICkoG2G8j0zUKy1KSS3u5JzJDJEw4cc2TqD0JHQjpTssmNPN5CeNiviQHiOPapWmXxdHnmpaa1pe99LZR2fEx4uGQyKSOWOu9WmjJGESVbhRn8Uakc/T0qPrKtcmGcC5heIHPAvEFHvVNBwGUx2gDIg4u8c8JJ9MdPSvQX2icrjTPTIbqJVAJ3pyS6gKHxisPaTTRxcTlskbYrl2vJPzPg+RrPxhbNVwQSybMK5uLeFcEEVku/vIPwrIT7UzcXt8Uyxf12p+P/ouRqDJFHklx9aaW8ZieDJQdaw0l5dNKqcTYZsb5Feg6fpyR6VLNIQQsZbnz2pyhx7Bysk2krOvOmdQJVc8VZyyk1EKDgqop+4nu5hw+I+1LjsEyz0+Pv5OHBNaC20pThjnNZ7RjcQgcakGtbb3JVQTms5XYDyWXAuBn60V0+oIMcqKjYz5OBpxWpoV0K9M4x9XHnTquPOowrsAelICWsq+dOrMn81QgtdhDRQyxSaP+an1lj/mH1qqCHypxYz5VLRSZcLInMOKeF3wj/mVTInrUhFApcSky3iuVO5yasIpInXmM1QRSgHBqUhzutS4lJluUhfmRTsUcKkeMfWq2EMaew4bYA0qHZdwrb/zD61JEUDYw4+tUKySLyQHHrUuKaX/AKYqHEtMuktosZD/AHp+Ju7/AAt96r4biQrjuhn3p5WlY7xfeoplckWCXbg/iNPfFy8wxqt4ZsgrHTqz3CfihBFLiF/hObUZ0wd6fh1GWQcjUE3PEnit+XrXMeoCJ8G3PypcbHbLjjlbcE0scsinxHPyqANaUDHctXB1lP8ApOPlS4MOWi9+LPDyOfSosl5Jk7mq1dZjOx4h7inU1O3ZslgKaiRZIN0/M8qjy35QHcVJF5asv4lPzqNO0DjIIpUNMgyaoSdjSNfd5GeMoF9Tkn5V33ULnkDXTWkarlVBduRI5Vf1E7ML2seSeESMpxuqgnbHyrO6VM8HesWALKVY9EXyHqa23aewMlrI8kmEjGQB1Hl6V5wZmaQDcAHKqOS+tduGnGjmyadmmE9xp3czZL96wdt99uWfT086k2lxa60ZROoRpDwoB+bzJrNjUmSPBHEg5KT5ev8AnWpFrcxxxvdS+EHYcO2Pam4CUy/vNJjiuuGG5JSMZLdWcjA+QG/zqJJpVnbRqZHLtwg4BqoOphxxZYvyVc8yT1+1RbvU3lDRoSFJ3Pnj/PvTUX+g5L0izuNSt7SNuBQXwOADpVB8S73HeHn+nnUcsTz3rtVK7+dWlRDdm07L3SLaXElwSJCnCmOZyST/AGpvV5JobWKCUAmSRWJx0ArNRXc0LK0bkZ2AB5VsNIePWLNFkAZoUOc82OP96ia4vkVF3ooZ72T93SLw4Vou7Hudyf1qt0uya7uwoQsBkkef+Zq81C3VBEvdYVTIMeZA/wBqldnLZvj7aFUK946sDjc7Z/Wm3StDS3TLm60uKFFgj4ZjbvEoIyQzsGyAOuDt7imta7rT7KxVX2sWw5zuznBJB9Cxz8vOp94fgbZraPJvHZgpHNGIIU/VgPmaqliN5occrrxwS2MxzyCzHhQA+R4lX61gre2aN1oz6ajcWLWlsGdI7a4iuVOCpJXqfmTjyqe2oLP2iGqExxxLKFlQLxKAykbj+Vh4T7+1Ul0X1i9a6DKHaKMv5ZACn9M1IM6w2VkUQi4MUkUo6OA+QfXAx9BWriuyEz1XQ7+60yyjihkXuZ2VIYjITIsYJAweTcOB77jyFer20ajTuGaNWh4cMB08x7V5XZWn/uWixKC6mdxIsgyoDKjqw/8AtkH3Br1C3lksUdXkEiZ2bky+h/v9a8rL/R3LowF/pUcWu3KtcYgYYJZyXUnPASBs6ctzuvI7biXFP8NaRTCJ4CZglxFkloJTssq+anG+Nx8sUdq5oLO8BuLYpHJhJuBseEthWHMggnmNsdKp5Lq50nUTcvcfGaTcxRiaYAPwEZHFtsWGQT5g551dckgToldqNRs4pZ5ZQIJbpTHdRPjuHfGzehYZIPI4GSCKp21Jo5pNAvLWB45EHcys5XhXHh7s45HAIJ6g+9d9q4Hkt5bzigex7lZWEZ4jHx8iPMcRJz5Egisy1pcRNb2E8m6MHt3YYMIIzw5/lz03G+3OrjGLjsabukbPQL4SWPczXEb3sIbghmXBZhzHvgfrUq+1cR2XcpE0ZlGzRDJHv5D1qk0vT5tWkjdpkI3LSkEcZ2wcdGz5GrfULC3FkkS3kUcqgiRO+4QSOvPI3wcVztR5HQ+jrS9RWW0ZY+6tbhBnM2CGHnk86gPpVwWnMvw3EBxIBlV+Z/tVM1pMXlivO/hZQe6fdkUYPM7gjlVV/wCpNSgkSIzm4jXG0e4NdMMbb+rOXI6VsurW9neXuXigcKcErxCtdp1pFMgJRR7Vm7HtDp0jBltOFwMkSczWxsr+GWJW4ODblw08if4ZKR1LpEJGeEH51HGgRMDhdutXUIE4yoOKmCy4hhVwKx5NDswt92bi4uJF8QO21WFvbzfDdw2ACMHIq+msu7k3B+tJ3CoOR+tNybQzN3oitIiBGpPLaotkEkYs0YwPKr68sBcnAB3poaUsKBVz9KaegOrS2R2BCEVaPFGkeMHYVFgieDKkMCv4vDy96cmdscOGBzw7g8/KpdgU95L/ABsKTt6UU/LZuzcTeEHlnIzRTEfMYroGuaWvROM7BrsNTYpRQMeDGuxIfSmRXQoCyQJSPKnBMfSowrsGih2SlmJ6CnUYk7mogp1GPnSKRJBIO1OLMQOR+RqMjsG51JTDcwKBkuC7wc4f61PjnDjbvKro0X+UVPtVXyqXQ0dszBti/wBKlQTYAyX+lOIinG1So0AYCobKOEvCnMsRU2HUozgFmFKYk4OVRuABsgVGmOy0F9GB/wAw5o+JVxtKwqCvlsflU2ADA8I+lKkU2MvcyR8p9vWuRO7HPfjNPThc44RUfgQrnhFNUK2PLNJxBe8U7+lWUIZ18XCaqkgjYjK5qwt4UBGMj51LQWWMNmrndFqYukoy7oKhRR8JHCzD51bWjNj8TfWs3ZSIp0OPOe7FMSaRGv5T9avSzcP4jTLEnnSTYyqh0mPoD9adbT1iUnJz96ncZAIFQrmV/M0bYGZ7SWx+CeNRxOQcL/U+gryJoWMxhTxMTufLzr2TUGaSzLOxJc8J9vKvJb1QlxIV24jk4+tdvx+qOfL+jMlq+BwjwDYvXE5YnDDCKMImeQ9f861aw+KFEPIf7f3qvdQzNt1J+hroTMWiI3hBYnG2Af7UxgsakTIDcFDnA2FWNhaREtlc4UHemwRFtLLCiaYYHNQetM3ZwQOR9Ktbpj3qr02qmmYvcHPnUob1ochAlTuxsTy9qn2V5PpcTNGShcnB9Bj/AD5VXReGTI8iKve6S50gSSDxBsAiqYkTbvW0Z4Y5kA/h8RPkWp99Yhto7WSI8D92wyByznGKy1/vLIT0wo9hSXLsba3biORGPsTUcEPky9m1yV9Tnkd9pIe6kH/cTgn3BAPyp9LvuuykUc8yqt7cSRrvnuSqrnb/AFCM/WszPn4i4Gdtz89qct5Se4yAeGZmGRnnj+1NwQJk5SdJWPUEhBWaIqY25BiSD8tmFTpu4MkYHB3dpKjxy55xvvuPv9qhyzyagILa4YmOOSThA2x4M/qoPzPnRp4E+md0/wCFouInr4eMD9fsKhopfh7ho+lvNYzpMvczWBEltLG/4eZXB5Ec1Hpt1qTLqkfaHTLiB5ns7pQjvJDnY42kA64326r6inezK47HgsS5Nsclt9sbD2GKy+uvJZyRSW8rRyL3pVxzHJse2c7ctzXl1cqO9PRYINVvY7S21a3R3LtaPMTkxygeA55NHIAN/MA86h6TpvxCT6U0U5jXKkgdSeJQfIqQSMc/EATjFX1+3e6EszD/APLhiWVOhDMBt1HPbB8qp4J5I+0tsvEWEyRFydj4uYyMbE7++9NttOgj2ZPWrubSL6WCKfimhYtAhXijuYWzxAHkds7VHsrzTzLHJDIRYOvdL3h42tGIzjHVc7g+R9DT/ai1il1ju5Q0nd3UsYZmOSOEsM+oPX65pvs5ElxeBpVUmYiGQBQAy8PPlz9a3deOwgnzN92UtH4JOOLujnHAPwjbc+2azeuwC01W5SeCaSThGTbNxNud9j0wc7VudMyNCIBIMKjgbqMdPas7NbrfamxnLEucMRzPhzXJjl9m2bT2YefV1sraeC0kM6XHMkFCh6HAODWae7YSB2lyQccONq1HaiwisbtooWcpISSHPFg46eVZRLdPCd8tz3r0sPGrOPNyujVaNe2V3bcEnfC6LAKqrsfWtZpV6C5BuG4QeROSax3Z3ToLtZYpAwVRnKnBOfWtzomm2kEqRpCuAdsjepy1szV6s19hdqqA8Odtql3WsC1g4iA0h5IOnvUMwptjIwOhpWhQjcZ964jUr5NXkZjJIdzUC6191U4qwu4YwmeEcqzl1EhcZFXFIC2s9Sm4ONiSTUg6pIWXnuRVYgAVQK7QeKnSAvZdVkee9jYKAgO+Nz4hjPtSSXhmuGCcJMV0xfJA4RtvVY4Vl/Ag67KKjLGpc5UbelWQi6ub2NoIGHCQxcg//I0VVN0wAPYUVDVspM//2Q=="
          ></vue-cutter>
        </div>

        <div class="console">
          <div class="pre">
            <img :src="prev" alt="" style="max-height: 100%;max-width: 100%;margin: 0 auto">
          </div>
          <div class="cut">
            <img v-if="img" :src="img" alt="" style="max-height: 100%;max-width: 100%;margin: 0 auto">
          </div>
        </div>

        <div class="controller">
          <h1 style="line-height: 1">control plan</h1>
          <div>
            <h4 style="line-height: 0.3">Image Controller</h4>
            <el-button type="primary" class="btn" @click="zoomIn">zoomIn</el-button>
            <el-button type="primary" class="btn" @click="zoomOut">zoomOut</el-button>
            <el-button type="primary" class="btn" @click="rotateLeft">rotateLeft</el-button>
            <el-button type="primary" class="btn" @click="rotateRight">rotateRight</el-button>
            <el-button type="primary" class="btn" @click="rotateClear">rotateClear</el-button>
            <el-button type="primary" class="btn" @click="getImg">cropImg</el-button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        prev: '',
        img: ''
      }
    },
    methods: {
      preview(data) {
        this.prev = data.url;
      },
      zoomIn() {
        this.$refs.cutter.relativeZoom(-1)
      },
      zoomOut() {
        this.$refs.cutter.relativeZoom(1)
      },
      rotateLeft() {
        this.$refs.cutter.rotateLeft()
      },
      rotateRight() {
        this.$refs.cutter.rotateRight()
      },
      rotateClear(){
        this.$refs.cutter.rotateClear()
      },
      getImg(){
        this.$refs.cutter.getBase64Data(data => {
          console.log(data)
          this.img = data
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
  }

  .main {
    width: 1365px;
    height: fit-content;
    margin: 0 auto;
    overflow: hidden;
  }

  .header {
    position: relative;
    width: 100%;
    padding: 20px 0 20px 0;
  }

  .el-icon-s-tools {
    font-size: 50px;
    float: left;
  }

  .t1 {
    position: relative;
    left: 10px;
    font-size: 43px;
  }

  .t2 {
    position: relative;
    left: 25px;
    font-size: 30px;
    color: #a8c1dc;
  }

  .body {
    width: 100%;
    height: 600px;
    padding: 10px 0;
    position: relative;
  }

  .cutter-body {
    position: absolute;
    left: 0;
    width: 40%;
    height: 95%;
    float: left;
    background: #000;
  }

  .console {
    width: 30%;
    height: 95%;
    position: absolute;
    left: 40%;
  }

  .controller {
    width: 26%;
    height: 95%;
    background: #c7e9ff;
    position: absolute;
    left: 70%;
    padding: 0 15px;
    box-shadow: 5px 5px 5px #bcbcbc;
    border-radius: 10px;
  }

  .pre {
    width: 98%;
    height: 48%;
    background: #ffc7eb;
    margin: 0 auto;
  }

  .cut {
    width: 98%;
    height: 48%;
    background: #8dbfea;
    margin: 6% auto;
  }

  .btn {
    display: inline-block;
    margin: 7px 3px !important;
  }

  @media screen and (max-width: 1400px) {
    .main {
      width: 1120px;
    }
  }

  @media screen and (max-width: 1120px) {
    .main {
      width: 896px;
    }

    .cutter-body {
      width: 60%;
      height: 60%;
      background: #000;
    }

    .console {
      width: 40%;
      height: 60%;
      background: #ff2ca5;
      position: absolute;
      left: 60%;
    }

    .controller {
      width: 100%;
      height: 40%;
      background: #caff92;
      position: absolute;
      left: 0;
      top: 60%;
    }

  }

  @media screen and (max-width: 900px) {
    .main {
      width: 719px;
    }

    .header {
      width: 100%;
    }

    .el-icon-s-tools {
      font-size: 45px !important;
    }

    .t1 {
      position: relative;
      left: 10px;
      font-size: 40px !important;
    }

    .t2 {
      position: relative;
      left: 25px;
      font-size: 23px !important;
    }
  }

  @media screen and (max-width: 725px) {
    .main {
      width: 578px;
    }

    .el-icon-s-tools {
      font-size: 40px !important;
      margin: 7px 0;
    }

    .t1 {
      position: relative;
      left: 10px;
      font-size: 34px !important;
    }

    .t2 {
      display: inline-block;
      position: absolute !important;
      left: 0 !important;
      bottom: 0;
      padding: 0 50px;
      font-size: 17px !important;
    }

    .cutter-body {
      width: 55%;
      height: 60%;
      background: #000;
    }

    .console {
      width: 55%;
      height: 60%;
      background: #ff2ca5;
      position: absolute;
      left: 55%;
    }

  }

  @media screen and (max-width: 580px) {
    .main {
      width: 100%;
    }

    .header {
      width: 100%;
      padding: 10px 0 25px 10px !important;
    }

    .el-icon-s-tools {
      font-size: 30px !important;
      margin: 8px 0;
    }

    .t1 {
      position: relative;
      font-size: 30px !important;
      line-height: 1;
    }

    .t2 {
      display: inline-block;
      position: relative;
      font-size: 15px !important;
      padding: 0 60px !important;
    }

    .cutter-body {
      width: 96%;
      height: 60%;
      background: #000;
      left: 2%;
    }

    .console {
      width: 96%;
      background: #ff2ca5;
      position: absolute;
      top: 60%;
      height: 40%;
      left: 2%;
    }

    .controller {
      display: none;
    }
  }

</style>
