## FAZ 4: Blockchain Kurulumu

### Adım 4.1 - Hardhat Kurulumu ve Akıllı Kontratlar
- `blockchain` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `hardhat.config.ts` dosyaları ile Hardhat altyapısı kuruldu.
- Sistem talimatı Ek v5.0'a göre isimlendirmeler güncellendi (Truth -> Flux).
- Aşağıdaki akıllı kontratlar oluşturuldu:
  - `FluxToken.sol` (ERC-20, Ownable, Pausable, ERC20Votes)
  - `FluxNFT.sol` (ERC-721, ERC2981 Royalty)
  - `FluxMarket.sol` (Signal Market AMM altyapısı)
  - `FluxOracle.sol` (Chainlink entegrasyonu için)
  - `FluxStaking.sol` (FLUX staking mekanizması)
  - `FluxDAO.sol` (Yönetişim mekanizması)
  - `FluxEscrow.sol` (Güvenli ödeme altyapısı)

**Kullanılan Teknolojiler:**
- Hardhat
- Solidity 0.8.24
- OpenZeppelin Contracts
- Chainlink Contracts
- TypeScript
